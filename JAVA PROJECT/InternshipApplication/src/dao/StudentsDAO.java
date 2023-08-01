package dao;



import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import models.Student;
import util.DBUtil;

public class StudentsDAO {
    private Connection connection;

    public StudentsDAO() {
        connection = DBUtil.getConnection();
    }

    public void addStudent(Student student) {
        try {
            String query = "INSERT INTO Students (student_id, name, email, phone_number, current_year, field_of_study, resume) VALUES (?, ?, ?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, student.getStudentId());
            preparedStatement.setString(2, student.getName());
            preparedStatement.setString(3, student.getEmail());
            preparedStatement.setString(4, student.getPhoneNumber());
            preparedStatement.setInt(5, student.getCurrentYear());
            preparedStatement.setString(6, student.getFieldOfStudy());
            preparedStatement.setString(7, student.getResume());

            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Student> getAllStudents() {
        List<Student> students = new ArrayList<>();
        try {
            String query = "SELECT * FROM Students";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Student student = new Student();
                student.setStudentId(resultSet.getInt("student_id"));
                student.setName(resultSet.getString("name"));
                student.setEmail(resultSet.getString("email"));
                student.setPhoneNumber(resultSet.getString("phone_number"));
                student.setCurrentYear(resultSet.getInt("current_year"));
                student.setFieldOfStudy(resultSet.getString("field_of_study"));
                student.setResume(resultSet.getString("resume"));
                students.add(student);
            }

            resultSet.close();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return students;
    }

    public Student getStudentById(int studentId) {
        Student student = null;
        try {
            String query = "SELECT * FROM Students WHERE student_id=?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, studentId);
            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                student = new Student();
                student.setStudentId(resultSet.getInt("student_id"));
                student.setName(resultSet.getString("name"));
                student.setEmail(resultSet.getString("email"));
                student.setPhoneNumber(resultSet.getString("phone_number"));
                student.setCurrentYear(resultSet.getInt("current_year"));
                student.setFieldOfStudy(resultSet.getString("field_of_study"));
                student.setResume(resultSet.getString("resume"));
            }

            resultSet.close();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return student;
    }
    
    // Add other methods for updating and deleting students if needed
}
