package MainApp;

import java.util.List;
import java.util.Scanner;

import dao.InternshipsDAO;
import dao.StudentsDAO;
import dao.ApplicationsDAO;
import models.Application;
import models.Internships;
import models.Student;

public class MainApp {
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        StudentsDAO studentsDAO = new StudentsDAO();
        InternshipsDAO internshipsDAO = new InternshipsDAO();
        ApplicationsDAO applicationsDAO = new ApplicationsDAO();

        while (true) {
            System.out.println("\nWelcome to the Internship/Placement Application System");
            System.out.println("1. View All Students");
            System.out.println("2. View All Internships");
            System.out.println("3. Apply for Internship");
            System.out.println("4. View Applications");
            System.out.println("5. Add Student");
            System.out.println("6. Add Internship");
            System.out.println("7. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    viewAllStudents(studentsDAO);
                    break;
                case 2:
                    viewAllInternships(internshipsDAO);
                    break;
                case 3:
                    applyForInternship(studentsDAO, internshipsDAO, applicationsDAO);
                    break;
                case 4:
                    viewApplications(applicationsDAO);
                    break;
                case 5:
                    addStudent(studentsDAO);
                    break;
                case 6:
                    addInternship(internshipsDAO);
                    break;
                case 7:
                    System.out.println("Thank you for using the application. Goodbye!");
                    scanner.close();
                    System.exit(0);
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void viewAllStudents(StudentsDAO studentsDAO) {
        List<Student> students = studentsDAO.getAllStudents();
        if (students.isEmpty()) {
            System.out.println("No students found.");
        } else {
            System.out.println("\nList of Students:");
            for (Student student : students) {
                System.out.println(student);
            }
        }
    }

    private static void viewAllInternships(InternshipsDAO internshipsDAO) {
        List<Internships> internships = internshipsDAO.getAllInternships();
        if (internships.isEmpty()) {
            System.out.println("No internships found.");
        } else {
            System.out.println("\nList of Internships:");
            for (Internships internship : internships) {
                System.out.println(internship);
            }
        }
    }

    private static void applyForInternship(StudentsDAO studentsDAO, InternshipsDAO internshipsDAO, ApplicationsDAO applicationsDAO) {
        viewAllStudents(studentsDAO);
        System.out.print("Enter the Student ID to apply: ");
        int studentId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        Student student = studentsDAO.getStudentById(studentId);
        if (student == null) {
            System.out.println("Student with ID " + studentId + " not found.");
            return;
        }

        viewAllInternships(internshipsDAO);
        System.out.print("Enter the Internship ID to apply: ");
        int internshipId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        Internships internship = internshipsDAO.getInternshipById(internshipId);
        if (internship == null) {
            System.out.println("Internship with ID " + internshipId + " not found.");
            return;
        }

        Application application = new Application();
        application.setStudentId(studentId);
        application.setInternshipId(internshipId);
        application.setStatus("Applied");

        applicationsDAO.addApplication(application);
        System.out.println("Application submitted successfully!");
    }

    private static void viewApplications(ApplicationsDAO applicationsDAO) {
        List<Application> applications = applicationsDAO.getAllApplications();
        if (applications.isEmpty()) {
            System.out.println("No applications found.");
        } else {
            System.out.println("\nList of Applications:");
            for (Application application : applications) {
                System.out.println(application);
            }
        }
    }

    private static void addStudent(StudentsDAO studentsDAO) {
        System.out.print("Enter student_id: ");
        int studentId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        System.out.print("Enter name: ");
        String name = scanner.nextLine();

        System.out.print("Enter email: ");
        String email = scanner.nextLine();

        System.out.print("Enter phone_number: ");
        String phoneNumber = scanner.nextLine();

        System.out.print("Enter current_year: ");
        int currentYear = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        System.out.print("Enter field_of_study: ");
        String fieldOfStudy = scanner.nextLine();

        System.out.print("Enter resume: ");
        String resume = scanner.nextLine();

        // Create a new Student object
        Student newStudent = new Student();
        newStudent.setStudentId(studentId);
        newStudent.setName(name);
        newStudent.setEmail(email);
        newStudent.setPhoneNumber(phoneNumber);
        newStudent.setCurrentYear(currentYear);
        newStudent.setFieldOfStudy(fieldOfStudy);
        newStudent.setResume(resume);

        studentsDAO.addStudent(newStudent);
        System.out.println("Student added successfully!");
    }

    private static void addInternship(InternshipsDAO internshipsDAO) {
        System.out.print("Enter internship_id: ");
        int internshipId = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        System.out.print("Enter company_name: ");
        String companyName = scanner.nextLine();

        System.out.print("Enter position: ");
        String position = scanner.nextLine();

        System.out.print("Enter description: ");
        String description = scanner.nextLine();

        System.out.print("Enter application_deadline (YYYY-MM-DD): ");
        String deadlineString = scanner.nextLine();
        // Convert the string to a Date object
        java.sql.Date applicationDeadline = java.sql.Date.valueOf(deadlineString);

        System.out.print("Enter required_skills: ");
        String requiredSkills = scanner.nextLine();

        // Create a new Internship object
        Internships newInternship = new Internships();
        newInternship.setInternshipId(internshipId);
        newInternship.setCompanyName(companyName);
        newInternship.setPosition(position);
        newInternship.setDescription(description);
        newInternship.setApplicationDeadline(applicationDeadline);
        newInternship.setRequiredSkills(requiredSkills);

        internshipsDAO.addInternship(newInternship);
        System.out.println("Internship added successfully!");
    }
}
