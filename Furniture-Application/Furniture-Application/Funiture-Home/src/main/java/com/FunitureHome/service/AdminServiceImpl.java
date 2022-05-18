package com.FunitureHome.service;

import com.FunitureHome.model.Admin;
import com.FunitureHome.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdminServiceImpl implements AdiminService
{
    private AdminRepository adminRepository;
    @Autowired
    public AdminServiceImpl(AdminRepository adminRepository)
    {
        this.adminRepository=adminRepository;
    }

    @Override
    public List<Admin> getAllAdmins() {
        return (List<Admin>) adminRepository.findAll();
    }
}
