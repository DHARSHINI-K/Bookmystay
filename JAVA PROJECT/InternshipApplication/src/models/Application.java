package models;



import java.util.Date;
import java.util.List;

public class Application {
    private int applicationId;
    private int studentId;
    private int internshipId;
    private Date applicationDate;
    private String status;

    // Constructors
    public Application() {
    }

    public Application(int applicationId, int studentId, int internshipId, Date applicationDate, String status) {
        this.applicationId = applicationId;
        this.studentId = studentId;
        this.internshipId = internshipId;
        this.applicationDate = applicationDate;
        this.status = status;
    }

    // Getters and Setters
    public int getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(int applicationId) {
        this.applicationId = applicationId;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public int getInternshipId() {
        return internshipId;
    }

    public void setInternshipId(int internshipId) {
        this.internshipId = internshipId;
    }

    public Date getApplicationDate() {
        return applicationDate;
    }

    public void setApplicationDate(Date applicationDate) {
        this.applicationDate = applicationDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    // toString() method to print Application details
    @Override
    public String toString() {
        return "Application [applicationId=" + applicationId + ", studentId=" + studentId + ", internshipId=" + internshipId
                + ", applicationDate=" + applicationDate + ", status=" + status + "]";
    }

	public void addApplication(Application application) {
		// TODO Auto-generated method stub
		
	}

	public List<Application> getAllApplications() {
		// TODO Auto-generated method stub
		return null;
	}
}
