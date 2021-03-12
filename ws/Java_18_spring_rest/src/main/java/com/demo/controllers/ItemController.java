package com.demo.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.models.Item;
import com.demo.service.ItemService;

@RestController
@RequestMapping("items")
public class ItemController {

	ItemService service = new ItemService();
	
	@GetMapping("")
	public List<Item> getItems() {
		System.out.println("in get mapping");
//		return new Item("Mobile", 9999, "This is demo mobile", 3254);
		return service.getAllItems();
	}
	
	@GetMapping("/{code}")
	public Item getItem(@PathVariable int code) {
		return service.getItemByCode(code);
	}
	
	@PostMapping("")
	public Item saveItem(@RequestBody Item item) {
		System.out.println("in post mapping");
		System.out.println(item);
		return service.saveItem(item);
	}
	
	@PutMapping("/{code}")
	public Item updateItem(@RequestBody Item item, @PathVariable int code) {
		System.out.println("in put mapping");
		System.out.println(item);
		System.out.println(code);
		return service.updateItem(code, item);
	}
	
	@DeleteMapping("/{code}")
	public Boolean delteItem(@PathVariable int code) {
		System.out.println("in delete mapping");
		return service.deleteItem(code);	
	}
	
	
	
}
