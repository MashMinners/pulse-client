import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import Fieldset from 'primevue/fieldset';
import Tooltip from 'primevue/tooltip';
import Dialog from 'primevue/dialog';
import ToastService from 'primevue/toastservice';
import Message from 'primevue/message';
import ProgressBar from 'primevue/progressbar';
import Textarea from 'primevue/textarea';
import Image from 'primevue/image';
import Card from 'primevue/card';
import Knob from 'primevue/knob';
import Panel from 'primevue/panel';
import Toolbar from 'primevue/toolbar';
import Menu from 'primevue/menu';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Drawer from "primevue/drawer";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import OverlayBadge from "primevue/overlaybadge";
import Avatar from "primevue/avatar";
import Chart from 'primevue/chart';
import InputMask from "primevue/inputmask";
import Divider from "primevue/divider";
import ('primeicons/primeicons.css')
import ('primeflex/primeflex.css');

export default {
    modules: [
        InputText, Button, Fieldset, ProgressBar, Dialog,  Message, Textarea, Image, Card, Knob, Panel, Toolbar,
        Menu, DataTable, Column, Tabs, TabList, TabPanel, Tab, TabPanels, Drawer, IconField, InputIcon, OverlayBadge,
        Avatar, Chart, InputMask, Divider
    ],
    directives: [
        {name: "tooltip", subject: Tooltip}
    ],
    options: [
        {
            ripple: true
        }
    ],
    services: [
        {name: "toast", subject: ToastService}
    ]
}