const icons = {
    searchIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABaUlEQVR4nO2Wz0pCQRjFf2i6ydop9ArZO1T7FhrlK0TSH+spxNcw61GCaJMFJZn71rqolfHBufBtwjtzLxLkgYELM+ecud98cxhY4Q+hDLSAW+ANmGnY90BztiZXHAIfwHzBGAPNPAwLQM8JPwEXwDawrlEHLoGhW9cVNxo9CX0BJwvEbO5UaxPz6PLOJbQbwNtz5o1Q07I7U/vTULTFfQdKIcSWO9OYsyoCz9I4CiHeiXROPDrSuAkhjUSy7o1FXRp2z1NjKlIlg/GGNKbLNt6MMR7lUOod19mpMRDJEikW19Lox1ynYYbr9CKN49AAGYtoMRiKM3EnwFooueki02IwLfaBb3EPiETXmbdVwt9Q1J8mpp9ANda44MznisGOwqGiYd175c40MU3W18iAhq7FoofAROWtuqzObF5S4Fv2vioYZtpQX93rG6mWp3koqu5lYpvd4r+Y11zZH5ZpnJg/AvfLNl4Bww/dcoIlpDH7/gAAAABJRU5ErkJggg==",
    notificationIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxElEQVR4nO2UsQrCQBBEX2elha2WfoyWIn6GktYupZ8mVqYT1Mb8glYpIgsTOMRAsjlB0YGB5W52ZrMHgV/CBDiLVkfHBihFq6OhB6w1eRVwAla664QxkAXGzzwAoy6TZzK6AgugL86BYxDi+pIkMB++uLezXBpbYWvs1WyT12Epzc4TcFezraQOA2lunoDqIWPp3I3lP+A7V5SqqWigLaRN25p7uG0S4DUvvW9R4RKYWB0deRBgP8DomCnEzKfvCPhMPABGcWocvaiRIwAAAABJRU5ErkJggg==",
    helpIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABG0lEQVR4nO3WLUtEQRSA4cePsGAQi4igzSL4E1yT2DSJNtkfYPZvrFXsFhWLQQSNttUkmPwIwoomEU0qF8YyzKKwd64b9oUJM3PuvNwzZ4ahTw9SQwOHuMMbPvCIY2xitGxpHQ/4+qW9YK0s6QLe/yD9aZ/YKCO9tx0EzyHVqblXTHYjXk8seo6ZMD+IlZDiOG6rG/FuYg/HEnGNhHi/G/FJtNhRh7i5hLj4NjurCfFObukEbhLi5ZzSRdwnpBeh8Eqnhu1wZmPpNcZzSAfCtZk6v8UpGFFhIbWxJDN7kbS4vWZVwGkkPlARZ5G4WZW4T2XUcRmePlfhoZCdYTxFxVX0h3KLpzvcWFP/8cftMJ6debTCHrdCv0/v8g0mCI1aliBq0AAAAABJRU5ErkJggg==",
    dashBoardIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAc0lEQVR4nOVUQQrAMAzyefn/E9xD3GUrO6xjCoV2E3qKQapJgC+hAGwAdPN41BNuAzsNujQm3Iaz+KYmg/tTAY7OoB5EulMUfdvBcAEavlayaI6vTEJ2oCnzKsNXJQKOr1r+VGhKARoZMNkDZ9EqOXZrYgcpidAVyoA/hAAAAABJRU5ErkJggg==",
    projectsIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAXklEQVR4nO2UuQ2AQAwEpzx3QDvUepRB4Eu4DIPvkSDYkZzuWBssiD9hwAF4cPusoDyE+wpJC7ljA87EA349ar2CEUm3IEuYI0FDFb2iisYryoydz0yFLZKUaOzEN1S9SnlopKIkGQAAAABJRU5ErkJggg==",
    teamsIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0klEQVR4nO2RMQrCQBREXxrRzkpbT6FXMHiN4C2sjTcSxDsI2gRSGVe0tzay8COfuNGNCELIg2lm/8wUCy0tQgdYAWfAALF4PyMG8pKsV5sZcAIyIFS+cQwYj9wLmSo41hioynkPxI6B5TcDoRzbo6nyOzJiKj65KtcgesAC2AEpMBK/D0TAGkiAmygRL5IbJJNKh+3q6oGt+iQbskyAq+Nzy7oAY8nMlb/RA3f1MBDv4FFeaC+ZofJs5xN9HDhG8w8qyoKS/xbf8tyn7C8DLQ3hAWu0ioFKM2Z9AAAAAElFTkSuQmCC",
    analysticsIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACCElEQVR4nO2Wy05UQRRF16CdKCBOQAEHEl4JDlT4APgCiFF/REUIYUACOiQSTDSRxz8wohv4CR4+EifiVAc0URlAk0N2JRXSXbfq0p1owk4q96Z7n332rTpVdeAK/xn6gVfAJvAJONKw9xIwAfQ1IvEwsAVUIocZHKpH4mvAEnAq4UPgA/AU6PYS2lc/AVbEqShmESjkTX4L2JbYMTALNF3gOAM+jPMa+OvNRmueL9+WwHfgfg1eNQMOD4EfnomkmVhS4DfgboAXMmDo8ky8TSm4U+AP8CiDm2UAadhynEToncNV+wzZiDFgeCOebdXMfV4BfgItdTTQDJTF7Q0RJ0V6HyGaYsCwJu7LEKkk0lgDDDwTtxgifRWpuwEG3PJ+DpHKIt1INJAyLEdNHIpkRRODvRwGLEdNfPHO9hi0AbuKsdiOALdPPLs561aEhtvAvuLs2U51PBZngwAmRFomDTYTO16R3anC+aj/n9fzIPLR7i3Hrkw5NEsz8yBCN5cR50iHXxM7nonpmOl3GNJl9Dv28ggshz1HpGWX0YNYkUUJHACdlzThuqmFFIGCtxQHOWdi1EtezNOatXombArngZsRcVZwU+onXPLklsyhoE7mRGK/gFVgHBhQ/3cduKff3olTUczCZZpSH4PAesJxW8q5bJno1X1e1JFa1tjXFnsB9GTLXOEfwhlZEdMMX6nckQAAAABJRU5ErkJggg==",
    messagesIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAjklEQVR4nO3VvQkCQRCG4UfzwyYMbMXoCrIBmzGxFROrOLAAHROFS9TA/bmFfWFgk+F7YYZZOp2FEYVq+QK56ALR5Agi4cK1KZCSNgXi3+PSvEBKukA0M4L4smRbXHJ/x/GhaY8p8XX8ybvpgPvrfcKgEDGrB45Ylwo3C79hVIHAFTuVOGOjIqua4R25eQJcLt4V6tEZjwAAAABJRU5ErkJggg==",
    integrationsIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABSElEQVR4nO3YTUrEMBiA4RcZJlPHRfEHPJdXUDyBS8VDKfi/cCsUdTNzGlECGShl0jpN8iWF74UsJ81DOjQENE3TNE3TbIfAJfE6B04QrgY+gF/gJsJ8V26uNXBKBsRmXEdAbMZKAmNfp6bzYDvegNmI+Wbut935voFjBHfCjnfgIGDeCniRwtSJEKKYugexjPWQ1JhaCDGE+QrB+BDP7oGpMsB9LEwuRFRMbkQUjA/xJIxoY+48mCMmghjCfG7D+L7Yj8CC/C3cWrrra9zai96JbvOhnZkKxPznFSsdY3b5n5SKMbsgSsUYz7ekF1EaxoQgSsFU7iQRhMiNqTwn4FGIXJgqBUIakxQhhdmXQKTGWMSrFGLocPkw8jpoz4No2ofBVG3bmduA+S6AH6md6MOEINr3vhYjikh1iX0m8TppmqZpmsYE+gPbZymzWG13mAAAAABJRU5ErkJggg==",
    cartIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO2UMW7CQBBFH405QMQJkCKfAZpwiuQI7mjNAQzhDkGUvgA3iFLBHWhwUgfShkQr/QIhENpZC7vYJ41kreZ7/47/GiKRSAv5AP5UeyC/t4H3EwOujkCfhihlImvKQCYDzohjezYd33rzNZBK+AV0gGWggWfLFCqJnRkLCXAAfoFeEzkYSb+uKwe+TKUvMJKe5cCXjfRPBFAZc/Cgb/8DdEMMlMYcvEi3IpDMmIOFdONQA339ki133+keqYEc+Pbc3N3/CTWRAHPgU6Gcac23x8zrhRNODT3BV3EADPVcGXqCDQxPXr4z9JiZXRhvYegxk2iDSqcqroTwVk8k0i7+Ae6KmeKpz/I4AAAAAElFTkSuQmCC",
    dolarIcon:
        "data:image/png;base64,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",
    userIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC6UlEQVR4nO2ZXWiOYRjHf+ZzxLAkiQOfs1lTlEU5UEI7c4BoDsbJEFpKdkTKjnzswFdKDtd8TU4wiinNwcpnYhxoSGJMiLG9uvR/67byvs/7PrP7Vu+v7qP3vv7P/36f5/64rhty5PjvmAGsB/YC9cBBoBZYCgwhcAYDVcBDIJGiPQOWECiTgNuO2VdAI3AIqFGzN/NEv38FjgCLCIixjsGnQAUw6C9984ADfd5QAzCSADgtQ21AQYT+NphiYAfwVrHn8cxU4CfwAyjLIn4a0KnBrMAjm2XiXAyNPc4n5o0LMrExhsYcaTzHI60yUR5z2f4G9Pqc9O0aSFFMnS7p2ArohccyMDumzhfpjMETN2Ugzk49Xhqf8UiDTKyNobFQGvfxSK1M1MXQ2CmNY3hkuUxcj6FxSRrr8MhKmfiU5fF8GPBRGhV45IZM7EpxUEyFxeyWxjU8klx+szlnJSmTxiM8ckYmLKHKlk3SaMQjG2TihZKnTKlRrGlU4hE7J53VOalLuUZU8pyjiZ2eTcs7d2WoJIOYUsXYPAuGepnan0FMnWKOExDzZcqyvQkRz1fvFbOYwGiSMdtbClP0Gw1cUd9mAmQy8CZColWkPrajTydQ2iIMpNgp1AXLgwgDSeboHQRMu0zOTVNCSqimFSQTleWZySkp+hVoA/2uQQVFKXBPg7gcoX+jsxkuIABKlNl1O7VfK2ino9Cp2lul8hQwjwHGEqhVygp7ZaZHNeBMyjm2n5xUbLKgfQtYDQz9h/4ZAWx1TqsJlXFOpJnc6bBV7Kgzv6y9BLYD+f3o/3cWV6U7j+SD7LPYBozrx+cUAFucuWbttfKVbLLPPxgFXHSEWweoar6sz8VRk7xkxXCgRULvgDUMPJXOJ9eiYkXGHHZ24Fn4Xdo75MVuuzJipi5velQJ9E25vHTrxjgy+/QPXCUcmuXJrrwjc0dB1YRDtbPgROZDmrtyn60z6iDyAzCbSNNsc86RIwfR+AUnligdzeBw0AAAAABJRU5ErkJggg==",
    reportIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqklEQVR4nO2YwUoDMRCG//bSix4VfQBP4jPo0dYH8D161Hfw5kN4EN/FLfRuPVsvghRkJDALg+52s5tkkpb5IXRpk5n5mskkG8C0W6KEbQngdB9ASBOGuKWyqwZDiUEq8XmcwM8/h6nsHgF41ZgZSgwCLRhSAFGBISWQ5DCkCOKUDEYbJBlMDpAkMLlAosNo7Oy+rYrhMLaGns2KA1GPgwwkrshmhGWpFVlkqZUhtW4AvANYAZjmnJFtgfjIjav9vQXE0ag+BrYF0qURgHUJIO7iYCP6fwGY9PBz/wfiemAcrfIx4CAW3M/B/PDzE4Cxh48Zj3FtFhBH8HtDJY7aJwDOAXzwd48d9s9ESt0FxBH1Tc5B1LoE8M2/zVvGH4g/4YXXiSpIXZ3qNbFouVy7FSnjnqVc0M9i/OGAOHqpyYCsTpuOG8I593Ozc9WwuNecXkPiiAriU2YfuO8ngAvPxa0CMmWYpjLZpDFXMBIVjXhWQuLIckSZ8N5CIqVGu3rWWgXs/FQSSN+ULBYkaxxkIHFFNiMsS63IIkstlqVWqalFhbTB2hsQE5T1CwsPr7cDvXGAAAAAAElFTkSuQmCC",
    importIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAi0lEQVR4nO3RMQoCMRBG4e8yHsBGFBXERg8jNluI3VZ7D8FbaSto5RGUQAQRF7MYG8mDHwIzyRsmFAov1DE/oy6C/1zRBrM3giWqHIIxLpg/CRY4YygTkyjZYR/P2R5/ENZ0jRn5gi2altoA/ZZaE+9+ZIoDeh2GCr3H+F9JrHHCLTGhd9VhoEJBOner7COa5jc9ZwAAAABJRU5ErkJggg==",
    editIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVR4nO2Yz0pCQRSHv+66sD9GD9HWZS9RBtk+CHqBNiJlm96gVaDP0TprUa2rTS1FCKx2YRoDRzgM945ZoGdgPjgI3qP8zsxvzp0ZSCQSiX+yDpwBD8CnxD3QlGem2QE+gFFBvEuOSQ6BYUD8OIYWi/DFPwJVYEOiKt/pmShjVPwtsJyTtwI8qbxTjIovBfK3Ve4dBj3fArLAbxZVbh+jC/YyUMSShQLybNP+ZRHVeVuoyPOZiB4FinAL+1k9P7EifkyoiJLka/uULXabLKeItid+KN1oZhwA3553XU8vYgG4CLyFjyz3eT0TrRzx7v/MjrzG9/zMRz6JJ4389CTbkGwzPck2JNtMz+4ftwdFb9iZbg8y4DVW8Y6KEtCLTbyj4R3Ao9iYaW6UkD0iE78KDESI+1yLSbxjX4m5JjLxeFcfdSJYsH777CpRrhv59qpJkT1r4vPapytoEzgGroAvCwfwEHUl7M2bjbx4kVs0M3QmCB7Iof0c2JpwQTsX+jmiu+L5mqwB0zTEOh2xU8XiKCcSCeLnB1x4S3oWGVH3AAAAAElFTkSuQmCC",
    addUserIcon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD2UlEQVR4nNWaTWwVVRTHf7QGCIjly6C1JVEqLVTDwsQPTFy4ASJ14cZKowtgU6wEgcTACmNiV350YYTqgo0JXy0SoHxpoi5IWZDwoRKKLAgxMUShYCW+tq9jDvmPuXmm430z7+UOv+Qm772558w5vXfOPedMITtNQAfwPtADfAxsB14GHiDn1AJrgR+BKGH8ArxETnkUOO0Y+yuwD/gE2KxhK3NZ1+8CnwHLyRGzHQOHgFeAKZPMrQE+KlmhPcAMcsBuGXQWqPOYb84sBTYBNyTbT2AWAuPAGLAshfwTwE05s5KAbJARfRl07HC2WDAOyoh1GXQskY6rBGRQRjyfMWz/DUyEfOivyJGWjHpuS49FwCBckgHNGfX8JT0PEYjvZUCWk3qudIwQkD0yoj2Djuek4wIB2S4jujPo2CodnxOQFTLi2ww6DkvHGgKySkbcSZmeTwWGpcNytGB8JyPeS0gUkzCZbdLxDQG5JCPS5Fkxy6TjJwKyX0ZYQZWW9dJh9Usw3pIR11Q8lctmyZqONwlILXBAedJt1Rq+1DipSZ90BeecDGotQ+Zpydhzlht6ZNSHZch0S2YnOeIZGWXV3sOe+dUfknmRnPG1DLOzZV7CvFnACc09RQ55DPjNo9Bq0Rw70ReRU87KyBcS5iz1LG0bgS7gmALCiIZ9HgDeBhqoEhc9ViSu0a8nrOwX6s4kdSwjdW96gfpKOzKkG1hoTfpLR+pplfKqElC7XlC9064KdKaGfX5D1wpO0tpWKScWaOkjGTsZdTpAR0u2xjtA0UlXHvfsix2QTFFbMRO2Auel8LjH/L2a+5WzEkVtp3dT3H+LZItpV6ZVld2o0/u1hvb/Ua9+8bN6JuLtlMYJ15lIaY+PDfcKqNdUFU44y7q7zHaOFVXGl57Zb6SRRJ/m7EqaNF17MM5WI7VxTOgp0tGoLVHweCYiD0cWSdeYVvo/VdxavfOIldnLnI3AHLLRVUbfN/JwBK1spL70v1i4O+QoGaxw13xAei2cVsqRDs07Ev8wDfhBP/4OvE7liV8QLa6gI82l5cGnzgnsc6M0xNHKEkmXqMzhMss5JHlSD0xRnUDuV0c+0JeTVJeqb60z+tJJdan6w34rxfKWM+wfCVAqXq3w2+kKVWvEzbgGPYsFJYBZHWlKOhCrTa8MtCw2qyP9IRsa9U70ssQv6+uJYeARAtHmpPFbUjoxLh1Bu/px3hUXVn2ejYkmZzsVFTxywWqnjVpQBFqjzsuDGi0KsfudOmg4DytRynx1Lsc8ot+YygivQioUFj7tLDgK/Az8qWGf7bCza4kh9h8i85xH7M3l9AAAAABJRU5ErkJggg==",
};

export default icons;