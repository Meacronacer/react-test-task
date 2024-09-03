import { useState } from "react";
import { UsersData } from "../data/users";
import { Select } from "../components/selector";
import { Input } from "../components/input";
import { Button } from "../components/button";

const EditUsersPage = () => {
  const [userIndex, setUserIndex] = useState(0);

  return (
    <div className="border-[1px] border-black w-[1240px] h-[768px] mx-auto my-[80px] p-[80px] pt-[60px]">
      <h1 className="text-[24px] text-center ml-1 tracking-[0.25em] leading-[133%] font-medium font-[Karla]">
        EDIT USER
      </h1>

      <div className="mt-[80px]">
        <div className="flex flex-col gap-y-1">
          <label className="leading-[143%] font-[Rubik] text-[14px]">
            User
          </label>
          <Select>
            <option>Oleg Schevchenko</option>
          </Select>
        </div>

        <h2 className="mt-[60px] text-[20px] leading-[160%] tracking-[0.01em] font-[Rubik]">
          User Information
        </h2>

        <div className="mt-[40px] grid grid-cols-2 gap-y-10 gap-x-20">
          <div className="flex flex-col gap-y-1">
            <label className="leading-[143%] font-[Rubik] text-[14px]">
            Full Name
            </label>
            <Input />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="leading-[143%] font-[Rubik] text-[14px]">
            Department
            </label>
            <Select>
              <option>Digital Marketing</option>
            </Select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="leading-[143%] font-[Rubik] text-[14px]">
            Country
            </label>
            <Select>
              <option>United States</option>
            </Select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="leading-[143%] font-[Rubik] text-[14px]">
            Status
            </label>
            <Select>
              <option>Active</option>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-[80px] flex justify-end gap-x-5">
        <Button variant='small'>Undo</Button>
        <Button disabled={true} variant='big'>Save</Button>
      </div>
    </div>
  );
};

export default EditUsersPage;
