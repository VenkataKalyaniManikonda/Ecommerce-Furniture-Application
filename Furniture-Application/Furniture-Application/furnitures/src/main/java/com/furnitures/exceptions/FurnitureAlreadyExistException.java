package com.furnitures.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT , reason = "furniture already exists")
public class FurnitureAlreadyExistException extends Exception{
}
