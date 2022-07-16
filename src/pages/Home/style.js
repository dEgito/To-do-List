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

  input {
    padding: 1rem;
    width: 100%;
    background-color: var(--gray-500);
    color: var(--gray-300);
    height: 3.375rem;
    border: 1px solid var(--gray700);
    border-radius: 8px;
  }

  button {
    padding: 1rem;
    border-radius: 8px;
    color: var(--white);
    background-color: var(--blue-500);
  }
`;
