import React, { useState, useContext, useEffect, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import DashboardItem from "../components/DashboardItem";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { GET_CHILD_FORM } from "../Mutations";
import DashboardName from "../dashboard/DashboardName";
import { AuthContext } from "../context/auth";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const columns = [
  { id: "name", label: "이름", minWidth: 100, align: "center" },

  {
    id: "age",
    label: "생활연령",
    minWidth: 100,
    align: "center",
  },

  { id: "childLang", label: "아동 언어", minWidth: 100, align: "center" },

  {
    id: "parentLang",
    label: "부모 언어",
    minWidth: 100,
    align: "center",
  },

  {
    id: "professional",
    label: "담당자",
    minWidth: 100,
    align: "center",
  },

  {
    id: "function",
    label: "기능",
    minWidth: 170,
    align: "center",
  },
];

function createData(name, age, childLang, parentLang, professional, id) {
  return { name, age, childLang, parentLang, professional, id };
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },

  container: {
    maxHeight: 440,
  },
});

export default function Dashboard() {
  const context = useContext(AuthContext);

  const calcAge = (date) => {
    var year;
    var month;

    if (!error && !loading) {
      if (date.length < 8) {
        return;
      } else {
        year = date.substring(0, 4);
        month = date.substring(4, 6);
        var today = new Date();
        var mm = String(today.getMonth() + 1); //January is 0!
        var yyyy = today.getFullYear();
        var childYear = yyyy - year;
        var childMonth = mm - month;
        if (childMonth < 0) {
          childMonth = 12 + childMonth;
          childYear = childYear - 1;
        }
      }
    }

    return childYear + "년" + childMonth + "개월";
  };
  const classes = useStyles();

  const handleChange = (event) => {};

  const [prof, setProf] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const { loading, error, data } = useQuery(GET_USERS);
  const rows = [];

  if (!error && !loading) {
    console.log(data);

    data.getUsers.map((user) => {
      if (user.name !== "") {
        rows.push(
          createData(
            user.name,
            calcAge(user.dateOfBirth),
            user.primaryLanguage,
            user.schoolLanguage,
            "임동선",
            user.id
          )
        );
      }
    });
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "function" ? (
                            <DashboardItem id={row["id"]} />
                          ) : column.id === "professional" ? (
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={value}
                              onChange={handleChange}
                              style={{ width: "80px", fontSize: "12px" }}
                            >
                              <MenuItem value={"임동선"}>임동선</MenuItem>
                              <MenuItem value={"박원정"}>박원정</MenuItem>
                              <MenuItem value={"김신영"}>김신영</MenuItem>
                            </Select>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      username
      email
      name
      dateOfBirth
      primaryLanguage
      schoolLanguage
    }
  }
`;
