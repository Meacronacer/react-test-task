import Select from "react-select";
import trash from "../assets/remove.svg";
import { Button } from "../components/button";
import { Styles } from "./editUsersPage";

const UsersPage: React.FC = () => {
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
              components={{
                IndicatorSeparator: () => null,
              }}
            />
            <Select
              className="w-[220px]"
              styles={Styles}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
            <Select
              className="w-[220px]"
              styles={Styles}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>

          <div className="p-3 border-[1px] border-[#c4c4c4] ml-5 hover:border-gray-600 group cursor-pointer">
            <img
              className="group-hover:scale-105 transition-transform"
              src={trash}
              alt="trash"
            />
          </div>

          <Button className="ml-auto">Add User</Button>
        </div>

        <div className="relative border-[1px] mt-10 px-[34px]">
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
            <tr className="h-[80px] font-[Rubik] px-[34px] border-separate">
              <td className="tracking-[0.01em]">Andrey Olishchuck</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Digital marketing</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Ukraine</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Active</td>
              <td className="float-right h-full"><img className="pt-[27px] cursor-pointer hover:scale-105 transition-transform" src={trash} alt="trash" /></td>
            </tr>
            <tr className="h-[80px]  font-[Rubik]">
              <td className="tracking-[0.01em]">Andrey Olishchuck</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Digital marketing</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Ukraine</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Active</td>
              <td className="float-right h-full"><img className="pt-[27px] cursor-pointer hover:scale-105 transition-transform" src={trash} alt="trash" /></td>
            </tr>
            <tr className="h-[80px]  font-[Rubik]">
              <td className="tracking-[0.01em]">Andrey Olishchuck</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Digital marketing</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Ukraine</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Active</td>
              <td className="float-right h-full"><img className="pt-[27px] cursor-pointer hover:scale-105 transition-transform" src={trash} alt="trash" /></td>
            </tr>
            <tr className="h-[80px]  font-[Rubik]">
              <td className="tracking-[0.01em]">Andrey Olishchuck</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Digital marketing</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Ukraine</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Active</td>
              <td className="float-right h-full"><img className="pt-[27px] cursor-pointer hover:scale-105 transition-transform" src={trash} alt="trash" /></td>
            </tr>
            <tr className="h-[80px]  font-[Rubik]">
              <td className="tracking-[0.01em]">Andrey Olishchuck</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Digital marketing</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Ukraine</td>
              <td className="font-[300] leading-[143%] font-[Rubik] text-[#5e626b]">Active</td>
              <td className="float-right h-full"><img className="pt-[27px] cursor-pointer hover:scale-105 transition-transform" src={trash} alt="trash" /></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
