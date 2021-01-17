initSidebarItems({"enum":[["BootSpeed",""],["DebugSecurityPolicy",""],["IspMode",""],["RotKeyStatus",""],["TrustzoneMode",""]],"struct":[["ActivationCode",""],["BootConfiguration",""],["DebugSecurityPolicies",""],["FactoryArea",""],["FactoryAreaProgInProgress","CMPA Page programming on going. This field shall be set to 0x5CC55AA5 in the active CFPA page each time CMPA page programming is going on. It shall always be set to 0x00000000 in the CFPA scratch area."],["Header",""],["InfieldArea","See `InfieldAreas` documentation for how this part of the configuration is used and updated by the ROM bootloader."],["InfieldAreas","This is a bit of an interesting construction."],["Keycode","Input to regenerate keys \"stored\" in the PUF."],["Keystore","All the keys :)"],["KeystoreHeader",""],["MonotonicCounter",""],["NxpArea","This is incorrect. There's more in the NMPA spreadsheet section!"],["PrinceConfiguration",""],["PrinceIvCode","Generated and used only by bootloader."],["PrinceSubregion",""],["ProtectedFlash","For a graphical overview: https://whimsical.com/lpc55-flash-memory-map-4eU3ei4wsqiAD7D2cAiv5s"],["RawCustomerData",""],["RawVendorUsage",""],["RotKeysStatus",""],["SecureBootConfiguration",""],["Sha256Hash",""],["UsbId","The PID/VID pair of the bootloader can be set arbitrarily, the default of `1fc9:0021` is used if the values zero are not changed."]],"trait":[["BigArray",""],["FactoryAreaCustomerData",""],["FactoryAreaVendorUsage",""],["InfieldAreaCustomerData",""],["InfieldAreaVendorUsage",""]]});