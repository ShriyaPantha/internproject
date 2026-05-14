
const downpart = () => {
  const currentYear = new Date().getFullYear();
    return (
    <div>
        <div className="px-7 py-7 text-sm text-gray-600 flex justify-between">
        <p>
          Thankyou For Creating With <strong>Aurora</strong> | {currentYear} @
          <span className="text-blue-400"> Themewagon</span>
        </p>

        <span>v1.8.0-rc.1</span>
      </div>
      
    </div>
  )
}

export default downpart
