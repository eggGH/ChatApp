package slds.app.chatapp;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;


public class MainActivity extends Activity{
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ImageView opinar = (ImageView) findViewById(R.id.opinar_imageView);
    }

    public void goToReview(View view) {
        Intent intent = new Intent(this,MapsActivity.class);
        startActivity(intent);
    }
}
