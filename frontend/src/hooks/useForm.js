import React, { useEffect, useState } from "react";

// https://felixgerschau.com/react-hooks-form-validation-typescript/

const useForm = (options) => {
  const [data, setData] = useState(options?.initialValues || {});

};

export default useForm;