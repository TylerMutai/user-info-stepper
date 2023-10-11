import React, {useContext, useEffect, useMemo} from 'react';
import {RegisterOptions, useForm} from "react-hook-form";
import User from "../../utils/types/user";
import DefaultInput from "../Input/DefaultInput";
import {AppContext} from "../../utils/contexts/appContext";
import DefaultInputGroup from "../InputGroup/DefaultInputGroup";
import DefaultInputLabel from "../InputLabel/DefaultInputLabel";


function UserNames() {
  const {
    register,
    watch,
    formState: {errors},
  } = useForm<User>()
  const {user, setUser, setNextButtonEnabled} = useContext(AppContext);

  useEffect(() => {
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
    if (user.firstName && user.lastName) {
      setNextButtonEnabled(true);
    } else {
      setNextButtonEnabled(false);
    }
  }, [setNextButtonEnabled, user])

  const optionsFirstName: RegisterOptions = useMemo(() => ({
    required: "First name is required",
    minLength: {
      value: 2,
      message: "First name should have a minimum length of 2"
    }
  }), [])

  const optionsLastName: RegisterOptions = useMemo(() => ({
    required: "Last name is required",
    minLength: {
      value: 2,
      message: "Last name should have a minimum length of 2"
    }
  }), [])

  return (
    <>
      <DefaultInputGroup>
        <DefaultInputLabel htmlFor={"firstName"}>
          First name
        </DefaultInputLabel>
        <DefaultInput defaultValue={user.firstName} {...register("firstName", optionsFirstName)}
                      placeholder={"Enter your first name"}/>
        {errors.firstName && <span style={{color: "red"}}>{errors.firstName.message}</span>}
      </DefaultInputGroup>
      <DefaultInputGroup>
        <DefaultInputLabel htmlFor={"lastName"}>
          Last name
        </DefaultInputLabel>
        <DefaultInput {...register("lastName", optionsLastName)} placeholder={"Enter your last name"}/>
        {errors.lastName && <span style={{color: "red"}}>{errors.lastName.message}</span>}
      </DefaultInputGroup>
    </>
  );
}

export default UserNames;