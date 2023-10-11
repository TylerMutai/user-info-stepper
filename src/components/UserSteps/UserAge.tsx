import React, {useContext, useEffect, useMemo} from 'react';
import {RegisterOptions, useForm} from "react-hook-form";
import User from "../../utils/types/user";
import {AppContext} from "../../utils/contexts/appContext";
import DefaultInput from "../Input/DefaultInput";
import DefaultInputLabel from "../InputLabel/DefaultInputLabel";
import DefaultInputGroup from "../InputGroup/DefaultInputGroup";

function UserAge() {
  const {
    register,
    watch,
    formState: {errors},
  } = useForm<User>()
  const {user, setUser, setNextButtonEnabled} = useContext(AppContext);

  React.useEffect(() => {
    const subscription = watch((value, {name}) => {
        if (name) {
          setUser(u => {
            const userCopy = {...u} as any;
            userCopy[name] = value;
            return userCopy;
          })
        }
      }
    )
    return () => subscription.unsubscribe()
  }, [watch, setUser])

  useEffect(() => {
    if (user.age >= 12) {
      setNextButtonEnabled(true);
    } else {
      setNextButtonEnabled(false);
    }
  }, [setNextButtonEnabled, user])

  const optionsAge: RegisterOptions = useMemo(() => ({
    required: "Age is required",
    min: {
      value: 12,
      message: "You cannot be younger than 12 years."
    }
  }), [])

  return (
    <DefaultInputGroup>
      <DefaultInputLabel htmlFor={"age"}>
        Age
      </DefaultInputLabel>
      <DefaultInput defaultValue={user.age} {...register("age", optionsAge)} type={"number"}
                    placeholder={"Enter your age"}/>
      {errors.age && <span>{errors.age.message}</span>}
    </DefaultInputGroup>
  );
}

export default UserAge;