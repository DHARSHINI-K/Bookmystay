package dao;




import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import models.Internships;
import util.DBUtil;

public class InternshipsDAO {
    private Connection connection;

    public InternshipsDAO() {
        connection = DBUtil.getConnection();
    }

    public void addInternship(Internships internship) {
        try {
            String query = "INSERT INTO Internships (internship_id, company_name, position, description, application_deadline, required_skills) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, internship.getInternshipId());
            preparedStatement.setString(2, internship.getCompanyName());
            preparedStatement.setString(3, internship.getPosition());
            preparedStatement.setString(4, internship.getDescription());
            preparedStatement.setDate(5, new java.sql.Date(internship.getApplicationDeadline().getTime()));
            preparedStatement.setString(6, internship.getRequiredSkills());

            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Internships> getAllInternships() {
        List<Internships> internships = new ArrayList<>();
        try {
            String query = "SELECT * FROM Internships";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Internships internship = new Internships();
                internship.setInternshipId(resultSet.getInt("internship_id"));
                internship.setCompanyName(resultSet.getString("company_name"));
                internship.setPosition(resultSet.getString("position"));
                internship.setDescription(resultSet.getString("description"));
                internship.setApplicationDeadline(resultSet.getDate("application_deadline"));
                internship.setRequiredSkills(resultSet.getString("required_skills"));
                internships.add(internship);
            }

            resultSet.close();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return internships;
    }

    public Internships getInternshipById(int internshipId) {
        Internships internship = null;
        try {
            String query = "SELECT * FROM Internships WHERE internship_id=?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, internshipId);
            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                internship = new Internships();
                internship.setInternshipId(resultSet.getInt("internship_id"));
                internship.setCompanyName(resultSet.getString("company_name"));
                internship.setPosition(resultSet.getString("position"));
                internship.setDescription(resultSet.getString("description"));
                internship.setApplicationDeadline(resultSet.getDate("application_deadline"));
                internship.setRequiredSkills(resultSet.getString("required_skills"));
            }

            resultSet.close();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return internship;
    }

    // Add other methods for updating and deleting internships if needed
}
