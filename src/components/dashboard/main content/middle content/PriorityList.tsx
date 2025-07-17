import {
  Checkbox,
  CheckboxGroup,
  Fieldset,
} from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useController, useForm } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
  framework: z.array(z.string()).min(1, {
    message: "You must select at least one framework.",
  }),
})

type FormData = z.infer<typeof formSchema>

const items = [
  { label: "Finish Dashboard UI", value: "priority one" },
  { label: "Complete Catmodoro refactor", value: "priority two" },
  { label: "finsih documentations" , value: "priority three" },
]

export const PriorityList = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const framework = useController({
    control,
    name: "framework",
    defaultValue: [],
  })

  const invalid = !!errors.framework

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Fieldset.Root invalid={invalid}>
        <Fieldset.Legend textStyle ="2xl">Priorities  </Fieldset.Legend>
        <CheckboxGroup
          invalid={invalid}
          value={framework.field.value}
          onValueChange={framework.field.onChange}
          name={framework.field.name}
        >
          <Fieldset.Content>
            {items.map((item) => (
              <Checkbox.Root key={item.value} value={item.value}>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>{item.label}</Checkbox.Label>
              </Checkbox.Root>
            ))}
          </Fieldset.Content>
        </CheckboxGroup>

        {errors.framework && (
          <Fieldset.ErrorText>{errors.framework.message}</Fieldset.ErrorText>
        )}

      </Fieldset.Root>
    </form>
  )
}