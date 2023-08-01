package models;



import java.util.Date;

public class Internships {
    private int internshipId;
    private String companyName;
    private String position;
    private String description;
    private Date applicationDeadline;
    private String requiredSkills;

    // Constructors
    public Internships() {
    }

    public Internships(int internshipId, String companyName, String position, String description, Date applicationDeadline,
            String requiredSkills) {
        this.internshipId = internshipId;
        this.companyName = companyName;
        this.position = position;
        this.description = description;
        this.applicationDeadline = applicationDeadline;
        this.requiredSkills = requiredSkills;
    }

    // Getters and Setters
    public int getInternshipId() {
        return internshipId;
    }

    public void setInternshipId(int internshipId) {
        this.internshipId = internshipId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getApplicationDeadline() {
        return applicationDeadline;
    }

    public void setApplicationDeadline(Date applicationDeadline) {
        this.applicationDeadline = applicationDeadline;
    }

    public String getRequiredSkills() {
        return requiredSkills;
    }

    public void setRequiredSkills(String requiredSkills) {
        this.requiredSkills = requiredSkills;
    }

    // toString() method to print Internships details
    @Override
    public String toString() {
        return "Internship [internshipId=" + internshipId + ", companyName=" + companyName + ", position=" + position
                + ", description=" + description + ", applicationDeadline=" + applicationDeadline + ", requiredSkills="
                + requiredSkills + "]";
    }
}
