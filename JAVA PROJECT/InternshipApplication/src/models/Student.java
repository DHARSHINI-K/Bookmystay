package models;



public class Student {
    private int studentId;
    private String name;
    private String email;
    private String phoneNumber;
    private int currentYear;
    private String fieldOfStudy;
    private String resume;

    // Constructors, getters, and setters

    public Student() {
    }

    public Student(int studentId, String name, String email, String phoneNumber, int currentYear,
                   String fieldOfStudy, String resume) {
        this.studentId = studentId;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.currentYear = currentYear;
        this.fieldOfStudy = fieldOfStudy;
        this.resume = resume;
    }

    // Getters and Setters

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getCurrentYear() {
        return currentYear;
    }

    public void setCurrentYear(int currentYear) {
        this.currentYear = currentYear;
    }

    public String getFieldOfStudy() {
        return fieldOfStudy;
    }

    public void setFieldOfStudy(String fieldOfStudy) {
        this.fieldOfStudy = fieldOfStudy;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    // toString() method to print Student details
    @Override
    public String toString() {
        return "Student [studentId=" + studentId + ", name=" + name + ", email=" + email + ", phoneNumber="
                + phoneNumber + ", currentYear=" + currentYear + ", fieldOfStudy=" + fieldOfStudy + ", resume=" + resume
                + "]";
    }
}

