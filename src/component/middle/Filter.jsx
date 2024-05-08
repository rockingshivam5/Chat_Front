import CloseIcon from '@mui/icons-material/Close';

const Filter = ({ name }) => {
    return (
        <button className="bg-gray-100 text-gray-400 rounded-md flex justify-between items-center h-6
        min-w-14">
            {name}
            <span><CloseIcon /></span>
        </button>
    )
}

export default Filter
