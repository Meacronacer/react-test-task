import { useState } from "react";
import { users } from "../data/users";
import { departments } from "../data/departments";
import { statuses } from "../data/statuses";
import { countries } from "../data/countries";
import { Input } from "../components/input";
import { Button } from "../components/button";
import Select, { StylesConfig } from "react-select";

interface option {
  index: number;
  label: string;
  value: string;
}

const colourStyles: StylesConfig<option, false> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    borderColor: "#e3e8ee",
    height: "48px",
    paddingLeft: "13px",
    paddingRight: "9px",
    borderRadius: "0",
    fontSize: "14px",
    fontFamily: "Rubik",
    letterSpacing: "0.01em",
  }),
  option: (styles) => ({
    ...styles,
    paddingLeft: "22px",
    fontSize: "14px",
    fontFamily: "Rubik",
  }),
};

const EditUsersPage = () => {
  const [department, setDepartamnet] = useState<option>({ index: 0, label: users[0].department.name, value: users[0].department.name});
  const [coutry, setCountry] = useState<option>({ index: 0, label: users[0].country.name, value: users[0].country.name});
  const [status, setStatus] = useState<option>({ index: 0, label: users[0].status.name, value: users[0].status.name});
  const [name, setName] = useState<string>(users[0].name);
  const [changeHasDone, setChangeHasDone] = useState(false)

  const usersData = users.map((item, index) => ({ index, label: item.name, value: item.name}));
  const departmentsData = departments.map((item, index) => ({ index, label: item.name, value: item.name}));
  const countrysData = countries.map((item, index) => ({ index, label: item.name, value: item.name}));
  const statusesData = statuses.map((item, index) => ({ index, label: item.name, value: item.name}));

  const userSelectorHandler = (e: any): void => {
    const index: number = e.index;
    let temp = users[0];
    users[0] = users[index];
    users[index] = temp;
    setDepartamnet({index: 0, label: users[0].department.name, value: users[0].department.name});
    setCountry({index: 0, label: users[0].country.name, value: users[0].country.name});
    setStatus({index: 0, label: users[0].status.name, value: users[0].status.name});
    setName(e.label);
    setChangeHasDone(false)
  };

  const resetChanges = () => {
    setDepartamnet({index: 0, label: users[0].department.name, value: users[0].department.name});
    setCountry({index: 0, label: users[0].country.name, value: users[0].country.name});
    setStatus({index: 0, label: users[0].status.name, value: users[0].status.name});
    setName(users[0].name)
    setChangeHasDone(false)
  }

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
          <Select
            className="max-w-[500px]"
            styles={colourStyles}
            value={usersData[0]}
            onChange={userSelectorHandler}
            options={usersData}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </div>

        <h2 className="mt-[60px] text-[20px] leading-[160%] tracking-[0.01em] font-[Rubik]">
          User Information
        </h2>

        <div className="mt-[40px] grid grid-cols-2 gap-y-10 gap-x-20">
          <div className="flex flex-col gap-y-1">
            <label className="leading-[143%] font-[Rubik] text-[14px]">
              Full Name
            </label>
            <Input value={name} onChange={(e) => {
                setName(e.target.value)
                setChangeHasDone(true)
                if (e.target.value === users[0].name) {
                    setChangeHasDone(false)
                }
            }} />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="leading-[143%] font-[Rubik] text-[14px]">
              Department
            </label>
            <Select
              value={department}
              styles={colourStyles}
              onChange={(e) => {
                if (e) {
                  setDepartamnet(e);
                  setChangeHasDone(true)
                  let temp = departments[0];
                  departments[0] = departments[e.index];
                  departments[e.index] = temp;
                }
              }}
              options={departmentsData}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="leading-[143%] font-[Rubik] text-[14px]">
              Country
            </label>
            <Select
              value={coutry}
              styles={colourStyles}
              onChange={(e) => {
                if (e) {
                  setCountry(e);
                  setChangeHasDone(true)
                  let temp = countries[0];
                  countries[0] = countries[e.index];
                  countries[e.index] = temp;
                }
              }}
              options={countrysData}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="leading-[143%] font-[Rubik] text-[14px]">
              Status
            </label>
            <Select
              value={status}
              styles={colourStyles}
              onChange={(e) => {
                if (e) {
                  setStatus(e);
                  setChangeHasDone(true)
                  let temp = statuses[0];
                  statuses[0] = statuses[e.index];
                  statuses[e.index] = temp;
                }
              }}
              options={statusesData}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-[80px] flex justify-end gap-x-5">
        <Button onClick={resetChanges} disabled={!changeHasDone} variant="small">Undo</Button>
        <Button disabled={!changeHasDone} variant="big">
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditUsersPage;
