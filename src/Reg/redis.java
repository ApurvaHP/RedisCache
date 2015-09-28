package Reg;

import java.util.List;

import redis.clients.jedis.*;

public class redis {
	
//	public redis(){
//	
//	}
//	
	public String Savetoredis(String fname, String lname, String email, String ssn ,String phone, String credit) {
//	{
//		
		System.out.println("trying to connectto redis");
		String Firstname = "Firstname";
		Jedis jedis = new Jedis("localhost");
		//jedis.connect();
		System.out.println("connected to redis server");
		
		jedis.set("firstname", fname);
		jedis.set("Lastname", lname);
		jedis.set("Email_id", email);
		jedis.set("SSN", ssn);
		jedis.set("Phone", phone);
		jedis.set("Credit", credit);
		
			
//		jedis.lpush("Firstname:", fname);
//		jedis.lpush("LastName", lname);
//		jedis.lpush("email", email);
//		//jedis.lpush("url", url );
//		jedis.lpush("phone", phone);
//		jedis.lpush("card", credit);
//		//jedis.lpush("password", pw);
//		
//		List<String> list = jedis.lrange("details", 0 ,5);
//	     for(int i=0; i<list.size(); i++) {
//	       System.out.println("Stored string in redis:: "+list.get(i));
//	     }
		
	
		System.out.println("Cached Value:" + jedis.get("firstname"));
		System.out.println("Cached Value:" + jedis.get("Lastname"));
		System.out.println("Cached Value:" + jedis.get("Email_id"));
		System.out.println("Cached Value:" + jedis.get("SSN"));
		System.out.println("Cached Value:" + jedis.get("Phone"));
		System.out.println("Cached Value:" + jedis.get("Credit"));
	       
     return "Data pushed to redis";
		
	}


	
}