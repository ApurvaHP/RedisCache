package Reg;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.Driver;

import java.sql.*;
import java.util.Date;

import com.mysql.jdbc.Statement;

public class DBConnec {
	private Connection con;
	private Statement st;
   	private ResultSet rs;
	private String query;
	private String username = "";
	private String password = "";
	
			
		public DBConnec(){
			System.out.println("trying to connect");
			try{
				Class.forName("com.mysql.jdbc.Driver").newInstance();
				con = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/Registration", "root", "");
				st =(Statement) con.createStatement();
			}catch(Exception ex){
				ex.printStackTrace();
			}
		}
			
		// TODO Auto-generated constructor stub
	
public String saveToDB(String fname, String lname, String email, String pw, String url, java.sql.Date date, String ssn ,String phone, String credit) throws Exception {
		
	String sql = "insert into RegData values (?,?,?,?,?,?,?,?,?)";
	try {
		String encryptedfname = md5(fname);
        String encryptedlname = md5(lname);
        String encryptedemail = md5(email);
        String encryptedpw = md5(pw);
		
		PreparedStatement prep = con.prepareStatement(sql);
		prep.setString(1, encryptedfname);
		prep.setString(2, encryptedlname);
		prep.setString(3, encryptedemail);
		prep.setString(4, encryptedpw);
		prep.setString(5, url);
		//prep.setString(6, dateTime);
		prep.setDate(6, date);
		prep.setString(7, ssn);
		prep.setString(8, phone);
		prep.setString(9, credit);
	

		int i = prep.executeUpdate();
		 String msg=" ";
         if(i!=0){  
                      System.out.println("Record has been inserted");  
                      }  
         else{  
                      System.out.println("failed to insert the data");
          } 
		prep.close();
		} catch (SQLException e) {
		e.printStackTrace();
	}
	return "pending";
}



public String md5(String str) throws NoSuchAlgorithmException
{
    MessageDigest md = MessageDigest.getInstance("MD5");
    md.update(str.getBytes());

    byte byteData[] = md.digest();

    //convert the byte to hex format method 1
    StringBuffer sb = new StringBuffer();
    for (int i = 0; i < byteData.length; i++) {
     sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
    }

    System.out.println("Digest(in hex format):: " + sb.toString());
    return sb.toString();
}


/*public static void main(String[] args){
	DBconnect db = new DBconnect();
	db.login("abc", "a");

}*/
 
}
