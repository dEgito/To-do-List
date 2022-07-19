import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-600);

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5rem 0;
    height: 12.5rem;
    background: var(--gray-700);
  }
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 46rem;
  margin-top: -2rem;
  margin-bottom: 3rem;

  textarea {
    padding: 1rem;
    width: 100%;
    background-color: var(--gray-500);
    color: var(--gray-300);
    height: 3.375rem;
    border: 1px solid var(--gray700);
    border-radius: 8px;
    resize: none;
  }

  button {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 8px;
    color: var(--white);
    background-color: var(--blue-500);

    &:hover {
      background-color: var(--blue-300);
      transition: background-color 0.1s;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  max-width: 46rem;
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 1rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    font-size: 0.875rem;
    font-weight: bold;

    > p {
      color: ${(props) => {
        switch (props.task) {
          case "to-do":
            return "var(--blue-300)";

          case "done":
            return "var(--purple-300)";

          default:
            return "var(--gray-300)";
        }
      }};
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 0.875rem;
      color: var(--gray-200);
      border-radius: 100%;
      background-color: var(--gray-400);
      height: 1.3rem;
      width: 1.6rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 46rem;
  padding: 4rem;
  border-top: 1px solid var(--gray-400);
  font-size: 1rem;
  line-height: 140%;
  min-height: 15.25rem;

  h3 {
    margin-top: 1rem;
    font-weight: bold;
  }
`;

export const Task = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 1rem;
  width: 46rem;
  border-radius: 4px;
  border: 1px solid var(--gray-400);
  background-color: var(--gray-500);

  > div {
    display: flex;
    gap: 0.75rem;

    p {
      font-size: 1rem;
      color: var(--gray-100);
    }
  }

  label {
    display: block;
    position: relative;
    padding-left: 14px;
    margin-bottom: 18px;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked {
        & ~ span {
          background-color: var(--purple-500);
          border: none;
        }

        & ~ span:after {
          display: block;
        }
      }
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      background-color: transparent;
      border: 2px solid var(--blue-300);
      border-radius: 20px;

      &:after {
        content: "";
        position: absolute;
        display: none;
        left: 6px;
        top: 3px;
        width: 3px;
        height: 6px;
        border: solid var(--white);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--gray-300);

    &:hover {
      color: var(--red-500);
      transition: color 0.1s;
    }
  }
`;