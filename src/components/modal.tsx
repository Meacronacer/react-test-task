import Select from "react-select";
import { Styles } from "../pages/editUsersPage";
import { Input } from "./input";
import { useState } from "react";
import { countries } from "../data/countries";
import { statuses } from "../data/statuses";
import { departments } from "../data/departments";
import { Button } from "./button";

interface props {
    showModal: boolean
    setShowModal: (showModal:boolean) => void
}

const Modal: React.FC<props> = ({showModal, setShowModal}) => {
    const [name, setName] = useState<string>('')
    const [department, setDepartamnet] = useState('')
    const [conurty, setCountry] = useState({})
    const [status, setStatus] = useState({})
    
    const departmentsData = departments.map((item, index) => ({label: item.name, value: item.name}))
    const countriesData = countries.map((item, index) => ({index, label: item.name, value: item.name}))
    const statusesData = statuses.map((item, index) => ({index, label: item.name, value: item.name}))

    
  return (
    <div
      onClick={() => setShowModal(false)}
      className={`
        fixed inset-0 flex z-30 justify-center items-center transition-colors 
        ${showModal ? "visible bg-black/50" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white shadow transition-all h-[444px] w-[720px]
          ${showModal ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}>

        <h3 className="text-[24px] font-medium font-[Karla] tracking-[0.25em] leading-[133%] text-center mt-10">ADD USER</h3> 

        <div className="mt-[40px] grid grid-cols-2 gap-y-10 gap-x-20 px-[60px]">
          <div className="flex flex-col gap-y-1">
            <label className="leading-[143%] font-[Rubik] text-[14px]">
              Full Name
            </label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="leading-[143%] font-[Rubik] text-[14px]">
              Department
            </label>
            <Select
              styles={Styles}
              options={departmentsData}
              onChange={(e) => setDepartamnet(e?.label)}
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
              styles={Styles}
              options={countriesData}
              onChange={(e) => setCountry(e?.label)}
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
              styles={Styles}
              options={statusesData}
              onChange={(e) => setStatus(e?.label)}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </div>

        <div className="flex items-center float-right mt-[60px] pr-[60px] gap-x-5">
            <Button>Cancel</Button>
            <Button>Add</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;