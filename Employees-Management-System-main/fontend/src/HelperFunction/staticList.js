import moment from "moment";

import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import PersonIcon from '@mui/icons-material/Person';

import config from "../config";
import {ApplyToLeave, Attendance, Dashboard, Employee, Leave, Salary, Profile, Chat} from "../Components/View";
import {ForumIcon} from "./icons";

export const ROUTE_LIST = () => [
    {
        key: "dashboard",
        textValue: "Dashboard",
        route: '/dashboard',
        exact: true,
        icon: <DashboardIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
        haveViewInDrawer: true,
        component: Dashboard,
    },
    {
        key: "profile",
        textValue: "Profile",
        route: '/profile',
        exact: true,
        icon: <DashboardIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
        haveViewInDrawer: false,
        component: Profile,
    },
    {
        key: "attendance",
        textValue: "Attendance",
        route: '/attendance',
        exact: true,
        icon: <AssessmentIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
        haveViewInDrawer: true,
        component: Attendance,
    },
    {
        key: "leave",
        textValue: "Leave",
        route: '/leave',
        exact: true,
        icon: <WorkOffIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
        haveViewInDrawer: true,
        component: Leave,
        subRoute: [
            {
                key: "applyToLeave",
                textValue: "applyToLeave",
                route: '/leave/applyToLeave',
                exact: true,
                icon: <WorkOffIcon/>,
                isButton: true,
                haveAdminView: false,
                haveUserView: true,
                haveViewInDrawer: true,
                component: ApplyToLeave,
            }
        ]
    },
    {
        key: "salary",
        textValue: "Salary",
        route: '/salary',
        exact: true,
        icon: <MonetizationOnIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
        haveViewInDrawer: true,
        component: Salary,
    },
    {
        key: "employee",
        textValue: "Employee",
        route: '/employee',
        exact: true,
        icon: <PersonIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: false,
        haveViewInDrawer: true,
        component: Employee,
    },
    {
        key: "chat",
        textValue: "Chat",
        route: '/chat',
        exact: true,
        icon: <ForumIcon/>,
        isButton: true,
        haveAdminView: true,
        haveUserView: true,
        haveViewInDrawer: true,
        component: Chat,
    },
];


export const LOGIN_FORM_FIELD = [
    [{
        id: `email`,
        label: `Email Id`,
        type: `input`,
        fieldType: `email`,
        validationType: `email`,
        required: true,
        value: '',
        fullWidth: true,
        helperText: `Enter Your Email-Id`,
        isValid: false,
        isInitialValue: true,
    }],
    [{
        id: `password`,
        label: `Password`,
        type: `input`,
        fieldType: `password`,
        validationType: `strongPassword`,
        required: true,
        value: '',
        fullWidth: true,
        helperText: `Enter Your Password`,
        isValid: false,
        isInitialValue: true,
    }],
    [{
        id: `logIn`,
        childText: `Log In`,
        type: `button`,
        fieldType: `button`,
        validationType: `allRequired`,
        color: `white`,
        bgcolor: `var(--main) !important`,
        variant: `contained`,
        size: 'large',
        helperText: ``,
        fullWidth: true,
        isValid: false,
        isInitialValue: true,
    }],
];

export const APPLY_TO_LEAVE_FORM_FIELD = [
    [{
        id: `applyToLeave`,
        label: `APPLY TO LEAVE`,
        type: `text`,
        variant: `h5`,
        align: `center`,
        gutterBottom: true,
        size: 'small',
        fullWidth: true,
    }],
    [{
        id: `type`,
        label: ``,
        type: `input`,
        fieldType: `select`,
        topSideLabel: `Leave Type`,
        fullWidth: true,
        validationType: ``,
        required: true,
        value: '',
        size: 'small',
        sx: {
            maxWidth: '210px',
        },
        helperText: `Select a leave type`,
        option: [
            {
                id: `Privilege Leave`,
                label: `Privilege Leave`,
                value: `Privilege Leave`,
            },
            {
                id: `Sick Leave`,
                label: `Sick Leave`,
                value: `Sick Leave`,
            },
            {
                id: `Compensatory Leave`,
                label: `Compensatory Leave`,
                value: `Compensatory Leave`,
            },
            {
                id: `Less of pay Leave`,
                label: `Less of pay Leave`,
                value: `Less of pay Leave`,
            },
        ],
        isValid: false,
        isInitialValue: true,
    }],
    [
        {
            id: `startingDate`,
            label: ``,
            type: `input`,
            fieldType: `datetime-local`,
            topSideLabel: `Leave Starting Date`,
            fullWidth: false,
            validationType: `date`,
            required: true,
            value: '',
            minDate: moment().format(config.DEFAULT_DATE_FORMAT),
            maxDate: moment().add(5, `month`).format(config.DEFAULT_DATE_FORMAT),
            size: 'small',
            sx: {
                maxWidth: '250px',
            },
            helperText: `Select a leave stating date and time.`,
            isValid: false,
            isInitialValue: true,
        },
        {
            id: `endingDate`,
            label: ``,
            type: `input`,
            fieldType: `datetime-local`,
            topSideLabel: `Leave Ending Date`,
            fullWidth: false,
            validationType: `date`,
            required: true,
            value: '',
            minDate: moment().format(config.DEFAULT_DATE_FORMAT),
            maxDate: moment().add(5, `month`).format(config.DEFAULT_DATE_FORMAT),
            size: 'small',
            sx: {
                maxWidth: '250px',
            },
            helperText: `Select a leave ending date and time.`,
            isValid: false,
            isInitialValue: true,
        }
    ],
    [{
        id: `description`,
        label: ``,
        leftSideLabel: ``,
        type: `input`,
        fieldType: `text`,
        multiline: true,
        topSideLabel: `Description`,
        fullWidth: true,
        validationType: `stringLength`,
        minChar: 10,
        maxChar: 120,
        required: true,
        value: '',
        size: 'small',
        helperText: `fill a leave description`,
        isValid: false,
        isInitialValue: true,
    }],
    [
        {
            id: `cancel`,
            childText: `Cancel`,
            type: `button`,
            fieldType: `button`,
            validationType: ``,
            color: `white`,
            bgcolor: `var(--main) !important`,
            variant: `contained`,
            size: 'large',
            helperText: ``,
            formControlCenter: true,
            formControlLeft: false,
            formControlRight: false,
            fullWidth: false,
            isValid: false,
            isInitialValue: true,
        },
        {
            id: `submit`,
            childText: `Submit`,
            type: `button`,
            fieldType: `button`,
            validationType: ``,
            color: `white`,
            bgcolor: `var(--main) !important`,
            variant: `contained`,
            size: 'large',
            sx: {
                width: `fit-content`,
            },
            helperText: ``,
            fullWidth: false,
            isValid: false,
            isInitialValue: true,
        },

    ],
];

export const FOOTER_STRING_ARRAY = [
    `All Copyright are reserved by ${config.APPLICATION_NAME} ${String.fromCharCode(9400)} ${new Date().getFullYear()}.`,
    `Powered by Mitesh Dudhat`];

export const userApplyToLeaveKeyList = ["startingDate", "endingDate", "type", "description"];