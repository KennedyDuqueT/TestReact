import { Box, Button, Typography } from '@mui/material';
import { useApi, useApiResource } from '@/hooks';

const newUser = { name: 'Example', lastname: 'User', username: 'exampleuser' };

export const ApiExample = () => {
  const getUser = useApi({ endpoint: 'users/1', method: 'get', withLoader: false });
  const getUsers = useApi({ endpoint: 'users', method: 'get' });
  const postUser = useApi({ endpoint: 'users', method: 'post' });

  const usersApi = useApiResource('users');

  const handleCreateUserExample1 = async () => {
    await postUser({ body: newUser });
  };

  const handleCreateUserExample2 = async () => {
    await usersApi.post({ body: newUser });
  };

  return (
    <Box mb={4}>
      <Typography variant="h5">Hook useApi & useApiResource</Typography>
      <Typography component="pre">
        <code>src\hooks\useApi.ts</code>
        <br />
        <code>src\components\dev\ApiExample.tsx</code>
      </Typography>

      <Typography fontWeight={700} my={2}>
        useApi
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="success" onClick={() => getUsers({ queryString: { param1: 'one', param2: 2, foo: 'bar' } })}>
          GET
        </Button>
        <Button variant="contained" sx={{ backgroundColor: 'warning.main' }} onClick={handleCreateUserExample1}>
          POST
        </Button>
        <Button variant="contained" color="success" onClick={() => getUser()}>
          GET USER
        </Button>
      </Box>

      <Typography fontWeight={700} my={2}>
        useApiResource
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="success" onClick={() => usersApi.get()}>
          GET
        </Button>
        <Button variant="contained" sx={{ backgroundColor: 'warning.main' }} onClick={handleCreateUserExample2}>
          POST
        </Button>
        <Button variant="contained" color="info" onClick={() => usersApi.put({ urlParams: '1' })}>
          PUT
        </Button>
        <Button variant="contained" color="info" onClick={() => usersApi.patch({ urlParams: '1' })}>
          PATCH
        </Button>
        <Button variant="contained" color="error" onClick={() => usersApi.delete({ urlParams: '1' })}>
          DELETE
        </Button>
      </Box>
    </Box>
  );
};
