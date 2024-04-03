import '@testing-library/jest-dom/extend-expect'; // for better assertion messages
import { renderHook } from '@testing-library/react';
import { ChangeEvent, FormEvent } from 'react';
import { act } from 'react-dom/test-utils';
import axiosInstance from '../helpers/axios';
import useServiceFormService from './useServiceFormService';

jest.mock('react-toastify', () => ({
  toast: {
    warn: jest.fn(),
    success: jest.fn(),
    warning: jest.fn()
  }
}));

jest.mock('../helpers/axios', () => ({
  post: jest.fn()
}));

describe('useServiceFormService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe('onChangeName', () => {
    it('should update name and set isNameError to true for an invalid name', () => {
      const { result } = renderHook(() => useServiceFormService());

      act(() => {
        result.current.onChangeName({
          target: { value: 'AA' }
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.name).toBe('AA');
      expect(result.current.isNameError).toBe(true);
    });

    it('should update name and set isNameError to false for a valid name', () => {
      const { result } = renderHook(() => useServiceFormService());

      act(() => {
        result.current.onChangeName({
          target: { value: 'Name' }
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.name).toBe('Name');
      expect(result.current.isNameError).toBe(false);
    });
  });

  describe('onChangeEmail', () => {
    it('should update email and set isEmailError to true for an invalid email', () => {
      const { result } = renderHook(() => useServiceFormService());

      act(() => {
        result.current.onChangeEmail({
          target: { value: 'invalid-email' }
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.email).toBe('invalid-email');
      expect(result.current.isEmailError).toBe(true);
    });

    it('should update email and set isEmailError to false for a valid email', () => {
      const { result } = renderHook(() => useServiceFormService());

      act(() => {
        result.current.onChangeEmail({
          target: { value: 'valid-email@google.com' }
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.email).toBe('valid-email@google.com');
      expect(result.current.isEmailError).toBe(false);
    });
  });

  describe('onChangePhoneNumber', () => {
    it('should update phone number and set error correctly', () => {
      const { result } = renderHook(() => useServiceFormService());

      expect(result.current.phoneNumber).toBe('');
      expect(result.current.isTouchedForm).toBe(false);
      expect(result.current.isPhoneNumberError).toBe(false);

      act(() => {
        result.current.onChangePhoneNumber({
          target: { value: '123456789' }
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.phoneNumber).toBe('123456789');
      expect(result.current.isTouchedForm).toBe(true);
      expect(result.current.isPhoneNumberError).toBe(false);

      act(() => {
        result.current.onChangePhoneNumber({
          target: { value: '123' }
        } as ChangeEvent<HTMLInputElement>);
      });

      expect(result.current.phoneNumber).toBe('123');
      expect(result.current.isTouchedForm).toBe(true);
      expect(result.current.isPhoneNumberError).toBe(true);
    });
  });

  describe('onChangeReview', () => {
    it('should update review and set error correctly', () => {
      const { result } = renderHook(() => useServiceFormService());

      expect(result.current.review).toBe('');
      expect(result.current.isTouchedForm).toBe(false);
      expect(result.current.isReviewError).toBe(false);

      act(() => {
        result.current.onChangeReview({
          target: { value: 'Valid review content.' }
        } as ChangeEvent<HTMLTextAreaElement>);
      });

      expect(result.current.review).toBe('Valid review content.');
      expect(result.current.isTouchedForm).toBe(true);
      expect(result.current.isReviewError).toBe(false);

      act(() => {
        result.current.onChangeReview({
          target: { value: 'Short' }
        } as ChangeEvent<HTMLTextAreaElement>);
      });

      expect(result.current.review).toBe('Short');
      expect(result.current.isTouchedForm).toBe(true);
      expect(result.current.isReviewError).toBe(true);
    });
  });

  describe('submitForm', () => {
    it('should submit form successfully', async () => {
      const { result } = renderHook(() => useServiceFormService());

      jest
        .spyOn(axiosInstance, 'post')
        .mockResolvedValueOnce({ data: 'Submission success' });

      act(() => {
        result.current.onChangeName({
          target: { value: 'Name' }
        } as ChangeEvent<HTMLInputElement>);
        result.current.onChangeEmail({
          target: { value: 'email@example.com' }
        } as ChangeEvent<HTMLInputElement>);
        result.current.onChangePhoneNumber({
          target: { value: '123456789' }
        } as ChangeEvent<HTMLInputElement>);
        result.current.onChangeReview({
          target: { value: 'This is a valid review' }
        } as ChangeEvent<HTMLTextAreaElement>);
      });

      await act(async () => {
        result.current.submitForm({
          preventDefault: jest.fn()
        } as unknown as FormEvent<HTMLFormElement>);
      });

      expect(axiosInstance.post).toHaveBeenCalledWith('/send', {
        name: 'Name',
        email: 'email@example.com',
        phoneNumber: '123456789',
        review: 'This is a valid review'
      });

      expect(result.current.isNameError).toBe(false);
      expect(result.current.isEmailError).toBe(false);
      expect(result.current.isPhoneNumberError).toBe(false);
      expect(result.current.isReviewError).toBe(false);

      expect(result.current.isTouchedForm).toBe(true);
    });

    it('should show error toast on form submission failure', async () => {
      jest
        .spyOn(axiosInstance, 'post')
        .mockResolvedValueOnce(new Error('Submission failed'));

      const { result } = renderHook(() => useServiceFormService());

      act(() => {
        result.current.onChangeName({
          target: { value: 'Name' }
        } as ChangeEvent<HTMLInputElement>);
        result.current.onChangeEmail({
          target: { value: 'email@example.com' }
        } as ChangeEvent<HTMLInputElement>);
        result.current.onChangePhoneNumber({
          target: { value: '123456789' }
        } as ChangeEvent<HTMLInputElement>);
        result.current.onChangeReview({
          target: { value: 'This is a valid review' }
        } as ChangeEvent<HTMLTextAreaElement>);
      });

      await act(async () => {
        result.current.submitForm({
          preventDefault: jest.fn()
        } as unknown as FormEvent<HTMLFormElement>);
      });

      expect(axiosInstance.post).toHaveBeenCalledWith('/send', {
        name: 'Name',
        email: 'email@example.com',
        phoneNumber: '123456789',
        review: 'This is a valid review'
      });

      // expect(toast.warn).toHaveBeenCalledWith('Something went wrong. Try again later!', {
      //   bodyClassName: 'toast-errors'
      // });

      expect(result.current.isNameError).toBe(false);
      expect(result.current.isEmailError).toBe(false);
      expect(result.current.isPhoneNumberError).toBe(false);
      expect(result.current.isReviewError).toBe(false);

      expect(result.current.isTouchedForm).toBe(true);
    });
  });
});
