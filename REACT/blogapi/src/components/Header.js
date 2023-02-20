import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import SearchBar from 'material-ui-search-bar';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbarTitle: {
        flexGrow: 1,
    },
}));

function Header() {

    // 로그인, 로그아웃 구분
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setAuth(true);
        }
    }, [auth])

    // 검색 기능
    let history = useHistory();
    const [data, setData] = useState({ search: '' });

    const goSearch = (e) => {
        history.push({
            pathname: '/search/',
            search: '?search=' + data.search,
        });
        window.location.reload();
    };

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        <Link
                            component={NavLink}
                            to="/"
                            underline="none"
                            color="textPrimary"
                        >
                            Blog
                        </Link>
                    </Typography>

                    <SearchBar
                        value={data.search}
                        onChange={(newValue) => setData({ search: newValue })}
                        onRequestSearch={() => goSearch(data.search)}
                    />
                    {auth ? <></> :
                        < nav >
                            <Link
                                color="textPrimary"
                                href="#"
                                className={classes.link}
                                component={NavLink}
                                to="/register"
                            >
                                Sign up
                            </Link>
                        </nav>
                    }
                    {auth ?
                        <Button
                            href="#"
                            color="primary"
                            variant="outlined"
                            className={classes.link}
                            component={NavLink}
                            to="/logout"
                        >
                            Logout
                        </Button>

                        :

                        <Button
                            href="#"
                            color="primary"
                            variant="outlined"
                            className={classes.link}
                            component={NavLink}
                            to="/login"
                        >
                            Login
                        </Button>
                    }
                    {auth ?
                        <Button
                            href="#"
                            color="primary"
                            variant="outlined"
                            className={classes.link}
                            component={NavLink}
                            to="/admin"
                        >
                            My Post
                        </Button>
                        :
                        <></>
                    }
                </Toolbar>
            </AppBar>
        </React.Fragment >
    );
}

export default Header;