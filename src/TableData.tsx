import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Input, Box } from "@mui/material";
import { useState } from "react";
import { Component } from "react";
import { datas } from './datas';
import { useContext } from "react";

  function InterfaceData(
    first_name: string,
    last_name: string,
    email: string,
    gender: string,
    id: number,
    ip_address: string,
    eth_address: string
  ) {
    return {
      first_name,
      last_name,
      email,
      gender,
      id,
      ip_address,
      eth_address
    };
  }

  export function DataTable() {

  const [search, setSearch] = React.useState("");
  return (
    <Box>
      <TableContainer
        sx={{ borderRadius: 5, bgcolor: "black" , overflowX:{xs:'auto'} }}
        component={Paper}
      >
        <Table
          sx={{ bgcolor: "white", color: "white" }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow sx={{ bgcolor: "red" }}>
              <TableCell sx={{ color: "white" ,overflow:'hidden'}} align="justify">
                Name
              </TableCell>
              <TableCell sx={{ color: "white" ,overflow:'hidden'}} align="justify">
                LastName
              </TableCell>
              <TableCell sx={{ color: "white",overflow:'hidden' }} align="justify">
                Email
              </TableCell>
              <TableCell sx={{ color: "white",overflow:'hidden' }} align="justify">
                Gender
              </TableCell>
              <TableCell sx={{ color: "white" ,overflow:'hidden'}} align="justify">
                Id
              </TableCell>
              <TableCell sx={{ color: "white",overflow:'hidden' }} align="justify">
                Ip Address
              </TableCell>
                <TableRow>
                  <TableCell sx={{ color: "white" }} align="justify">
                      Etherium Address
                  </TableCell>
                  <TableCell sx={{ color: "white" }} align="justify">
                      <Input
                      placeholder="search"
                      value={search}
                      onChange={(e) => setSearch(e?.target?.value??'')}
                      sx={{ borderBottom: "1px solid white", color: "white" }}
                      />
                </TableCell>
                </TableRow>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas
              .filter((data) => {
                return search.toLocaleLowerCase() === ""
                  ? data
                  : data.first_name.toLocaleLowerCase().includes(search) ||
                      data.last_name.toLocaleLowerCase().includes(search) ||
                      data.email.toString().includes(search) ||
                      data.gender.toString().includes(search) ||
                      data.id.toString().includes(search) ||
                      data.first_name.toLocaleUpperCase().includes(search) ||
                      data.last_name.toLocaleUpperCase().includes(search) ||
                      data.toString().includes(search);
              })
              .map((data) => (
                <TableRow key={data.first_name}>
                  <TableCell sx={{ color: "dark-gray", py: 1 }} align="justify">
                    {data.first_name}
                  </TableCell>
                  <TableCell sx={{ color: "dark-gray", py: 1 }} align="justify">
                    {data.last_name}
                  </TableCell>
                  <TableCell sx={{ color: "dark-gray", py: 1 }} align="justify">
                    {data.email}
                  </TableCell>
                  <TableCell sx={{ color: "dark-gray", py: 1 }} align="justify">
                    {data.gender}
                  </TableCell>
                  <TableCell sx={{ color: "dark-gray", py: 1 }} align="justify">
                    {data.id}
                  </TableCell>
                  <TableCell sx={{ color: "dark-gray", py: 1 }} align="justify">
                    {data.ip_address}
                  </TableCell>
                  <TableCell sx={{ color: "dark-gray", py: 1 }} align="justify">
                    {data.eth_address}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
