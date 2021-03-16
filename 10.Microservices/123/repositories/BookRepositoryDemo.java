package com.demo.repositories;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.demo.entities.Book;

public class BookRepositoryDemo{
	static public Map<Integer, Book> db = new HashMap<Integer, Book>();
	private int count = 0;
	
	public Book save(Book book) {
		book.setId(++count);
		return null;
	}
	public Book findById(int id) {
		return null;
	}
	public List<Book> findAll(){
		return null;
	}
}
