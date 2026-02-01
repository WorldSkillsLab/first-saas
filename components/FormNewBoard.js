"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const FormNewBoard = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handelSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    try {
      const data = await axios.post("/api/board", { name });
      setName("");
      toast.success("Board created successfully.");
      router.refresh();
    } catch (e) {
      const errorMessage =
        e.response?.data?.error || e.message || "Something went wrong.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="bg-base-100 p-8 rounded-3xl space-y-8"
      onSubmit={handelSubmit}
    >
      <p className="font-bold text-lg">Create a new feedback board</p>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Board name</span>
        </div>

        <input
          required
          type="text"
          placeholder="Future Unicorn Inc. 🦄"
          className="input input-bordered w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <button className="btn btn-primary w-full" type="submit">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        Create Board
      </button>
    </form>
  );
};

export default FormNewBoard;
