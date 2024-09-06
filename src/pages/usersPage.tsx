import { default as Select, components} from "react-select";
import trash from "../assets/remove.svg";
import { departments } from "../data/departments";
import { Button } from "../components/button";
import { option, Styles } from "./editUsersPage";
import { useState } from "react";
import { countries } from "../data/countries";
import { statuses } from "../data/statuses";
import { users } from "../data/users";
import Modal from "../components/modal";

const Option = (props:any) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            className="h-[24px] w-[24px] accent-[#000]"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

const UsersPage: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [removedUsersId, setRemovedUsersId] = useState<number[]>([])
    const [departmentsSelected, setDepartamnetSelected] = useState({ optionSelected: null });
    const [countriesSelected, setCountriesSelected] = useState({ optionSelected: null })
    const [statusesSelected, setStatusSelected] = useState({ optionSelected: null })
    const departmentsData = departments.map((item, index) => ({index, label: item.name, value: item.name}))
    const countriesData = countries.map((item, index) => ({index, label: item.name, value: item.name}))
    const statusesData = statuses.map((item, index) => ({index, label: item.name, value: item.name}))
    let departmentLen = Object(departmentsSelected.optionSelected).length
    let countriesLen = Object(countriesSelected.optionSelected).length
    let statusesLen = Object(statusesSelected.optionSelected).length

    console.log(removedUsersId)

    const userData = users.map((item, index) => {

        if (removedUsersId.includes(index)) return

        let selected = false
        // 
        departmentsSelected?.optionSelected?.map((department:option) => {
            if (department.label === item.department.name) {
                selected = true
            }
        })
        
        if (departmentLen && !selected) {
            return
        }

        return (
            <tr key={index} className="h-[80px] font-[Rubik] px-[34px] border-separate">
            <td className="tracking-[0.01em]">{item.name}</td>
            <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">{item.department.name}</td>
            <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">{item.country.name}</td>
            <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">{item.status.name}</td>
            <td onClick={() => userRemoveHandler(index)} className="float-right h-full"><img className="pf-[20px] pt-[27px] cursor-pointer hover:scale-105 transition-transform" src={trash} alt="trash" /></td>
        </tr>
        )
    })

    const resetHandler = () => {
      setDepartamnetSelected({ optionSelected: null});
      setCountriesSelected({ optionSelected: null})
      setStatusSelected({ optionSelected: null})
    };

    const userRemoveHandler = (id:number) => {
        setRemovedUsersId([...removedUsersId, id])
    } 

  return (
    <div className="border-[1px] border-black w-[1240px] h-[768px] mx-auto my-[80px] p-[80px] pt-[60px]">
      <h1 className="text-[24px] text-center ml-1 tracking-[0.25em] leading-[133%] font-medium font-[Karla]">
        USERS
      </h1>

      <div className="mt-10">
        <p className="font-[300] leading-[143%] tracking-[0.01em] text-[#1b2438] font-[Rubik] text-[14px]">
          Please add at least 3 departmetns to be able to proceed next steps.
        </p>

        <div className="flex items-center mt-[10px]">
          <div className="flex items-center gap-x-3">
            <Select
              className="w-[220px]"
              styles={Styles}
              options={departmentsData}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              controlShouldRenderValue={false}
              value={departmentsSelected.optionSelected}
              onChange={(selected:any) => setDepartamnetSelected({optionSelected: selected})}
              placeholder={`Departaments ${departmentLen > 0 ? departmentLen : ''}`}
              isMulti
              components={{
                IndicatorSeparator: () => null,
                Option
              }}
            />
            <Select
              className="w-[220px]"
              styles={Styles}
              isMulti
              options={countriesData}
              value={countriesSelected.optionSelected}
              onChange={(selected:any) => setCountriesSelected({optionSelected: selected})}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              controlShouldRenderValue={false}
              placeholder={`Countries ${countriesLen > 0 ? countriesLen : ''}`}
              isDisabled={departmentLen === undefined || departmentLen <= 2}
              components={{
                IndicatorSeparator: () => null,
                Option
              }}
            />
            <Select
              className="w-[220px]"
              styles={Styles}
              options={statusesData}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              controlShouldRenderValue={false}
              value={statusesSelected.optionSelected}
              onChange={(selected:any) => setStatusSelected({optionSelected: selected})}
              placeholder={`Statuses ${statusesLen > 0 ? statusesLen : ''}`}
              isDisabled={departmentLen === undefined || departmentLen <= 2}
              isMulti
              components={{
                IndicatorSeparator: () => null,
                Option
              }}
            />
          </div>

          <div onClick={resetHandler} className="p-3 border-[1px] border-[#c4c4c4] ml-5 hover:border-gray-600 group cursor-pointer">
            <img
              className="group-hover:scale-105 transition-transform"
              src={trash}
              alt="trash"
            />
          </div>

          <Button onClick={() => setShowModal(true)} className="ml-auto font-[Rubik] hover:bg-gray-300 transition-colors">Add User</Button>
        </div>

        <div className="relative border-[1px] mt-10 pl-[34px] pr-[24px] max-h-[476px] overflow-y-auto scrollbar-thin scrollbar-webkit">
            <hr className="absolute w-full h-[1px] bg-[##5e626] left-0 top-[74px]" />
        <table className="w-full text-left border-separate-2 border-collapse text-[14px]">
          <thead className="h-[74px] font-bold font-[Karla] leading-[143%] tracking-[0.03em]">
            <tr>
              <th className="w-[220px]">Full Name</th>
              <th className="w-[424px]">Department</th>
              <th className="w-[220px]">Country</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userData}
          </tbody>
        </table>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default UsersPage;
