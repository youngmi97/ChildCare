import React from "react";
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

const columns = [
  { id: "name", label: "이름", minWidth: 100 },
  {
    id: "age",
    label: "생활연령",
    minWidth: 100,
  },
  { id: "childLang", label: "아동 언어", minWidth: 100 },
  {
    id: "parentLang",
    label: "부모 언어",
    minWidth: 100,
  },
  {
    id: 'professional',
    label: '담당자',
    minWidth: 100
  },
  
  {
    id: "professional",
    label: "담당자",
    minWidth: 100,
  },

  {
    id: "function",
    label: "기능",
    minWidth: 170,
    align: "center",
  },
];

function createData(name, age, childLang, parentLang, professional) {
  return { name, age, childLang, parentLang, professional};
}

const rows = [
  createData('김석환', '13', '한국어, 영어', '한국어', '김신영'),
  createData('정재환', '10', '한국어,영어', '영어', '임동선'),
  createData('김창현', '8', '일본어, 한국어', '일본어', '박원정'),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function Dashboard() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
                          {column.id === "function" ? <DashboardItem /> : value}
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
