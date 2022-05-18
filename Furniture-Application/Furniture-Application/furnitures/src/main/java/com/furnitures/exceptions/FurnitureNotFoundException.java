package com.furnitures.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND,reason = "Furniture is not found")
public class FurnitureNotFoundException extends Exception{
}
