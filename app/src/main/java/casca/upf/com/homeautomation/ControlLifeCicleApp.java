package casca.upf.com.homeautomation;

import android.app.Application;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;


public class ControlLifeCicleApp extends Application {

    public static DatabaseReference ref;

    @Override
    public void onCreate() {

        super.onCreate();


        FirebaseDatabase database = FirebaseDatabase.getInstance();
        ref = database.getReference("sensor");


    }
}
