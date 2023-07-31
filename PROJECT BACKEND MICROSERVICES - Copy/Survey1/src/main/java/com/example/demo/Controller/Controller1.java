package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Form;
import com.example.demo.Service.Services1;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/user")
public class Controller1 {
	
		@Autowired
		Services1 s;

		@GetMapping("/get")
		public List<Form> showDetails() {
			return s.getDetails();
		}
		
		@PostMapping("/post")
		public String addDetails(@RequestBody Form m) {
			s.add(m);
			return "Added product " + m.getUserid();
		}
		@PutMapping("/update")
		public Form updateInfo(@RequestBody Form st1) {
			return s.updateDetails(st1);
		}
		
		@DeleteMapping("/delete/{sno}")
		public String deleteInfo(@PathVariable("sno") int sno) {
			s.deleteDetails(sno);
			return "Deleted Details";
		}

		//sorting
		@GetMapping("/product/{field}")
		public List<Form> getWithSort(@PathVariable String field) {
			return s.getSorted(field);
		}

		// pagination
		@GetMapping("/product/{offset}/{pageSize}")
		public List<Form> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
			return s.getWithPagination(offset, pageSize);
		}

		

}
