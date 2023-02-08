type Props = {
    Date: string;

};

const Date: React.FC<Props> = ({
  Date
}) => {

    return (

        <div className="ml-[20px] my-[37.5px] font-semibold text-gray-400">
         {Date}
        </div>
    );
}
export default Date;