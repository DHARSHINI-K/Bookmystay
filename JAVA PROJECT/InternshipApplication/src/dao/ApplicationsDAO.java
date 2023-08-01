package dao;



import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import models.Application;
import util.DBUtil;

public class ApplicationsDAO {
    private Connection connection;

    public ApplicationsDAO() {
        connection = DBUtil.getConnection();
    }

    public void addApplication(Application application) {
        try {
            String query = "INSERT INTO Applications (application_id, student_id, internship_id, application_date, status) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, application.getApplicationId());
            preparedStatement.setInt(2, application.getStudentId());
            preparedStatement.setInt(3, application.getInternshipId());
            preparedStatement.setDate(4, new java.sql.Date(application.getApplicationDate().getTime()));
            preparedStatement.setString(5, application.getStatus());

            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Application> getAllApplications() {
        List<Application> applications = new ArrayList<>();
        try {
            String query = "SELECT * FROM Applications";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Application application = new Application();
                application.setApplicationId(resultSet.getInt("application_id"));
                application.setStudentId(resultSet.getInt("student_id"));
                application.setInternshipId(resultSet.getInt("internship_id"));
                application.setApplicationDate(resultSet.getDate("application_date"));
                application.setStatus(resultSet.getString("status"));
                applications.add(application);
            }

            resultSet.close();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return applications;
    }

    // Add other methods for updating and deleting applications if needed
}
