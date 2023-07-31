package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.Entity.Form;
import com.example.demo.Repository.Repo1;

@Service
public class Services1 {

		@Autowired
		Repo1 r;
		
		public String add(Form m) {
			r.save(m);
			return "Added";
		}
		
		public List<Form> getDetails() {
			return r.findAll();
		}
		
		public Form updateDetails(Form e1) {
			return r.saveAndFlush(e1);
		}
		
		public void deleteDetails(int sno) {
			r.deleteById(sno);
		}
		
		public List<Form> getSorted(String field) {
			return r.findAll(Sort.by(Sort.Direction.ASC,field));
		}
		
		public List<Form> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
			Page<Form> page =r.findAll(PageRequest.of(offset, pageSize));
			return page.getContent();
		}


}
