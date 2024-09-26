import { useAppDispatch, useAppSelector } from "../app/hooks";
import { incrementAge } from "../features/userSlice";

export const User = () => {
  const {
    firstname,
    lastname,
    age,
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>{firstname}</h1>
      <h1>{lastname}</h1>
      <h1>{age} years old</h1>
      <button onClick={() => dispatch(incrementAge())}>increment age</button>
    </>
  );
};
