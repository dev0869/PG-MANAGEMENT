import React from 'react'
import { Stack } from '@mui/material'

import { Menu } from "react-feather";
import AdminContact from './components/AdminContact';
import { Nav, Navbar, Form } from "react-bootstrap";
import VerticalNavbar from './VerticalNavbar';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserBooking from './components/userBooking';
const Admin = () => {
    const [show,setShow]=useState(true)
  return (
    <>
      <Stack display={"flex"} flexDirection={"row"}>
        {show && (
          <Stack flex={1}>
            <VerticalNavbar />
          </Stack>
        )}

        <Stack flex={8}>
          <Navbar
            expanded="lg"
            className="pl-4 shadow-md navbar-classic navbar navbar-expand-lg"
          >
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex align-items-center">
                <Menu
                  size="18px"
                  className="cursor-pointer"
                  onClick={() => setShow(!show)}
                />

                <div className="ms-lg-3 d-none d-md-none d-lg-block">
                  <Form className="d-flex align-items-center">
                    <Form.Control type="search" placeholder="Search" />
                  </Form>
                </div>
              </div>

              <Nav className="navbar-right-wrap ms-2 d-flex nav-top-wrap">
                {/* <QuickMenu /> */}
              </Nav>
            </div>
          </Navbar>

          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path="userbooking" element={<UserBooking />}></Route>
            <Route path="contact" element={<AdminContact />}></Route>
          </Routes>
        </Stack>
      </Stack>
    </>
  );
}

export default Admin