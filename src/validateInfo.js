export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username required"
    }

    if(!values.email) {
        errors.email = "Email required"
    }
}