package Reg;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;




import Reg.DBConnec;

/**
 * Servlet implementation class Register
 */
@WebServlet("/Register")
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		 // gets values of text fields
        String fname = request.getParameter("firstname");
        String lname = request.getParameter("lastname"); 
        String email = request.getParameter("Email");
        String phone = request.getParameter("Phone");   
        String pw = request.getParameter("pwd");   
        String url = request.getParameter("url");   
        //String dateTime = request.getParameter("localDOB");   
        String date = request.getParameter("dateofbirth");   
        String ssn = request.getParameter("SSN");   
        String credit = request.getParameter("credit");   
    
       	               
        DBConnec db = new DBConnec();
		
        try {
        	
        	
         	SimpleDateFormat sdf = new SimpleDateFormat("mm/dd/yyyy");
       	 
         	System.out.println(sdf.format(new Date()));
         	
			db.saveToDB(fname, lname, email, pw, url, new java.sql.Date((new Date()).getTime()), ssn, phone, credit);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
       
        
        redis r = new redis();
        
//        SimpleDateFormat sdf = new SimpleDateFormat("mm/dd/yyyy");
//      	 
//     	System.out.println(sdf.format(new Date()));
		
		try {
			r.Savetoredis(fname, lname, email, ssn, phone, credit);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
