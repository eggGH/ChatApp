package slds.app.chatapp;

import java.util.ArrayList;

public class Review {
    private String comment;
    private LongLat longlat;

    public Review() {
        comment = "none";
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
