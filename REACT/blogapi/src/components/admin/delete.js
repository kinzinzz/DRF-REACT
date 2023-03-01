import jwtDecode from "jwt-decode";
import axiosInstance from '../../axios';
import { useHistory, useParams, } from 'react-router-dom';
//MaterialUI
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

export default function Create() {
    const history = useHistory();
    const { id } = useParams();
    // 작성자 정보 가져오기
    const token = localStorage.getItem("access_token")
    const decode = jwtDecode(token)
    const author = decode.user_id

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .delete('admin/delete/' + id).then((res) => {
                history.push('/');
                window.location.reload();
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);

                }
            })
            ;
    };

    return (
        <Container component="main" maxWidth="sm">
            <Box
                display="flex"
                justifyContent="center"
                m={1}
                p={1}
                bgcolor="background.paper"
            >
                <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Press here to confirm delete
                </Button>
            </Box>
        </Container>
    );
}