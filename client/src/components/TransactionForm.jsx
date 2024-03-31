import { useState } from "react";

const TransactionForm = () => {
  const [formData, setFormData] = useState({
    addressTo: "",
    message: "",
    keyword: "",
    amount: 0,
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-[500px] w-[320px] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="h-[80%] w-full formOne flex justify-evenly items-center flex-col"
      >
        <input
          type="text"
          name="addressTo"
          value={formData.addressTo}
          onChange={handleChange}
          placeholder="To"
          className="w-[90%] rounded p-2 formOne text-white border-transparent focus:border-transparent focus:ring-0 px-3"
        />
        <input
          type="number"
          step={"0.0001"}
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Amount(ETH)"
          className="w-[90%] rounded p-2 formOne text-white border-transparent focus:border-transparent focus:ring-0 px-3"
        />
        <input
          type="text"
          name="keyword"
          value={formData.keyword}
          onChange={handleChange}
          placeholder="Keyword"
          className="w-[90%] rounded p-2 formOne text-white border-transparent focus:border-transparent focus:ring-0 px-3"
        />
        <input
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Message"
          className="w-[90%] rounded p-2 formOne text-white border-transparent focus:border-transparent focus:ring-0 px-3"
        />
        <button
          type="submit"
          className="w-[90%] rounded p-2 bg-[color:var(--button-primary)] hover:bg-[var(--button-secondary)] text-white px-3"
        >
          Send Now
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
