package com.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "demo")
public class Item {
	
	private String name;
	private double price;
	@Column(name="msg")
	private String desc;
	
	@Id
	private int code;
	// no-args constructor
	public Item() {}
	
	public Item(String name, double price, String desc, int code) {
		super();
		this.name = name;
		this.price = price;
		this.desc = desc;
		this.code = code;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	@Override
	public String toString() {
		return "Item [name=" + name + ", price=" + price + ", desc=" + desc + ", code=" + code + "]";
	}
	
	

}
