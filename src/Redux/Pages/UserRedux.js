import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { deleteUser, getAllUsers} from '../Actions/reducerAction';

const UserRedux = () => {
    let navigate = useNavigate;

    let users = useSelector((state) => state.userReducer.users);
    
    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllUsers());   
    },[]);
    // console.log(getUsers)

    const editdata = (id) => {
        navigate('/edit/', { state: {id}});
      }

      const deletedata = (id) => {
          dispatch(deleteUser(id))
        // e.preventDefault();
        
    }
    

    return (
        <>
            <Link to="/adduser" className="btn btn-primary btn-sm mb-2"> Tambah </Link>
            <table className='table table-striped table-hover' id="datatable">
                <thead>
                    <tr>
                        {/* <th>No</th> */}
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Aksi</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users && users.map((user) => {
                            
                            return(
                                <tr>
                                    {/* {user} */}
                                    {/* <td>{i + 1}</td> */}
                                    <td>{ user.idUser }</td>
                                    <td>{ user.username }</td>
                                    <td>{ user.passwords }</td>
                                    <td>
                                    <button className="btn btn-primary btn-sm mr-1" onClick={() => editdata(user.idUser)}> <i className='bi bi-pen'></i> </button>
                                    <button className="btn btn-danger btn-sm mr-1" onClick={(e) => deletedata(user.idUser)}>
                                        <i className='bi bi-trash'></i>
                                    </button>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </>
    )
}

export default UserRedux
