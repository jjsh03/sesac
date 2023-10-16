import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormPractice() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="name"
          {...register('name', {
            required: '이름은 필수 항목입니다.',
          })}
        />
        {errors.name?.message}
        <br />
        <input
          type="number"
          placeholder="age"
          {...register('age', {
            validate: {
              validAge: (v) => v > 0 || '0 이상의 숫자만 입력 가능합니다',
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
