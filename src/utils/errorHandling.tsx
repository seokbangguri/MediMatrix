import Swal from 'sweetalert2';

export const showError = (errorMessage: any, errorText?: any) => {
    return (
        Swal.fire({
            title: errorMessage,
            text: errorText || 'Error',
            icon: 'error',
            confirmButtonText: 'OK',
        })
    )
};

export const showErrorNoConfirm = (errorMessage: any, errorText?: any) => {
    return (
        Swal.fire({
            title: errorMessage,
            text: errorText || 'Error',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
        })
    )
};

export const showSuccess = (successMessage: any, successText?: any) => {
    return (
        Swal.fire({
            title: successMessage,
            text: successText || 'Success',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        })
    )
};

export const showSuccessConfirm = (successMessage: any, successText?: any) => {
    return (
        Swal.fire({
            title: successMessage,
            text: successText || 'Success',
            icon: 'success',
            confirmButtonText: 'OK',
        })
    )
};

export const showWarning = (warningMessage: any, warningText?: any) => {
    return (
        Swal.fire({
            title: warningMessage,
            text: warningText || 'Warning',
            icon: 'warning',
            showConfirmButton: false,
            timer: 1500
        })
    )
};

export const showInfo = (successMessage: any, successText?: any) => {
    return (
        Swal.fire({
            title: successMessage,
            text: successText || 'Success',
            icon: 'info',
            showConfirmButton: false,
            timer: 1500
        })
    )
};
